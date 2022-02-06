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
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    },
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
