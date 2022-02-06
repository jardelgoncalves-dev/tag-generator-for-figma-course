import {
  ActionFunction,
  redirect,
  unstable_createFileUploadHandler,
  unstable_parseMultipartFormData
} from "remix";
import { z, ZodError } from 'zod'
import { joinError } from "~/lib/join-errors";

import type { NodeOnDiskFile } from '@remix-run/node'
import { db } from "~/utils/db.server";

export const action:ActionFunction = async ({ request }) => {
  let uploadHandler = unstable_createFileUploadHandler({
    maxFileSize: 5_000_000,
  });

  const Validator = z.object({
    image: z.object({}),
    name: z.string().nonempty(),
    role: z.string().nonempty(),
    instagram: z.string().nonempty(),
    city: z.string().nonempty(),
  });

  const formPayload = Object.fromEntries(await unstable_parseMultipartFormData(request, uploadHandler))

  try {
    const { name, instagram, city, role} = Validator.parse(formPayload)
    const image = formPayload.image as NodeOnDiskFile
    const avatar = Buffer.from(await image.arrayBuffer()).toString('base64')

    const tag = await db.tag.create({
      data: {
        name,
        instagram,
        city,
        role,
        avatar: `data:${image.type};base64,${avatar}`,
      }
    })
    return redirect(`/tag/${tag.id}`)
  } catch (error) {
    return {
      errors: joinError((error as ZodError).issues),
      formPayload
    }
  }
}

export { default } from '~/containers/Create'