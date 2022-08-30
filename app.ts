// @ts-ignore TS2691
import { serve } from "https://deno.land/std@0.153.0/http/server.ts";

type bodyType = ReadableStream | string | null;

async function handler(req: Request): Promise<Response> {
  const request_url = new URL(req.url);
  let url = request_url.href.replace(request_url.origin + "/", "");

  let body: bodyType = null;
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
    if (!url.match(/^https?:\/\//)) {
      url = "https://" + url;
    }

    const response = await fetch(url)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    if (response.body === undefined) {
      body = `{ "error": "${response}" }`;
      content_type = "application/json";
      status = 500;
    } else {
      body = response.body;
      content_type = response.headers.get("content-type");
      status = response.status;
    }
  }

  return new Response(body, {
    status: status,
    // @ts-ignore TS2322
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": content_type,
    },
  });
}

serve(handler);
