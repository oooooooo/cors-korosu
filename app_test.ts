// @ts-ignore TS2691
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

// @ts-ignore TS2304
Deno.test("dns error", async () => {
  const response = await fetch("http://localhost:8000/example.test").then(
    (response) => {
      return response;
    },
  );

  assertEquals(response.status, 500);
  assertEquals(await response.json(), {
    "error":
      "TypeError: error sending request for url (https://example.test/): error trying to connect: dns error: failed to lookup address information: Name or service not known",
  });
});

// @ts-ignore TS2304
Deno.test("404", async () => {
  const response = await fetch(
    "http://localhost:8000/https://github.com/oooooooo/cors-korosu/404",
  ).then(
    (response) => {
      return response;
    },
  );
  assertEquals(response.status, 404);
  assertEquals(await response.text(), "Not Found");
});

// @ts-ignore TS2304
Deno.test("200", async () => {
  const response = await fetch("http://localhost:8000/cors-korosu.deno.dev")
    .then((response) => {
      return response;
    });

  assertEquals(response.status, 200);
  assertEquals(
    await response.text(),
    'Usage: <a href="https://cors-korosu.deno.dev/https://hnrss.org/newest">https://cors-korosu.deno.dev/https://hnrss.org/newest</a>',
  );
});
