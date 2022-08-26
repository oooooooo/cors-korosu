/** @jsx h */

// @ts-ignore TS2691
import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';

async function handler(req: Request): Promise<Response> {
  const request_url = new URL(req.url);
  const url = request_url.href.replace(request_url.origin + '/', '');

  const resp = await fetch(url);
  const content_type = resp.headers.get('content-type');
  return new Response(resp.body, {
    status: resp.status,
    // @ts-ignore TS2322
    headers: {
      "content-type": content_type
    },
  });
}

serve(handler);
