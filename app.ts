// @ts-ignore TS2691
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handler(req: Request): Promise<Response> {
  const request_url = new URL(req.url);
  let url = request_url.href.replace(request_url.origin + "/", "");

  let body: ReadableStream | string | null;
  let content_type: string | null;
  let status = 200;
  if (url === "") {
    const sample_url = request_url + "https://hnrss.org/newest";
    body = `Usage: <a href="${sample_url}">${sample_url}</a>`;
    content_type = "text/html";
  } else if (url === "favicon.ico") {
    // @ts-ignore TS2304
    body = await Deno.readFile("./favicon.ico");
    content_type = "image/x-icon";
  } else {
    if (!url.match(/https?:\/\//)) {
      url = "https://" + url;
    }

    const resp = await fetch(url);
    body = resp.body;
    content_type = resp.headers.get("content-type");
    status = resp.status;
  }

  return new Response(body, {
    status: status,
    // @ts-ignore TS2322
    headers: {
      "content-type": content_type,
    },
  });
}

serve(handler);
