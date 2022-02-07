import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import type { MetaFunction } from "remix";

import globalStyle from "~/styles/global.css"

export const meta: MetaFunction = () => {
  return { title: "Tag Generator" };
};

export const links: LinksFunction = () => {
  return [
    {
      href: globalStyle,
      rel: "stylesheet"
    }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
