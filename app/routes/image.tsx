import { LoaderFunction } from "remix";
import { getHtml } from "~/lib/get-html";
import { getScreenshot } from "~/lib/get-screenshot";

export const loader: LoaderFunction = async () => {
  const html = getHtml();
  const screenshot = await getScreenshot(html, 'jpeg', !!process.env.IS_DEV)

  return new Response(screenshot, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
    }
  })
}