import { LoaderFunction, MetaFunction, redirect } from "remix";
import { db } from "~/utils/db.server";

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `Tag | ${data.name}`,
    "og:image": `http://localhost:3000/image/${data.id}`
  };
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const tag = await db.tag.findUnique({ where: { id: params.id } })
  if (!tag) return redirect("/")

  return tag
}

export { default } from '~/containers/Tag'
