# CORS Korosu

CORS Korosu is CORS Killer.

I used to [cors-anywhere](https://github.com/Rob--W/cors-anywhere) on Heroku, but Heroku is going to charge for it, so I made a simple one that works with Deno Deploy for free.

```javascript
// before
fetch('https://hnrss.org/newest')

// after
fetch('https://your-account.deno.dev/https://hnrss.org/newest')
fetch('https://your-account.deno.dev/hnrss.org/newest')
```

Korosu means kill in Japanese.

```text
Pronunciation
(Tokyo) ころす [kòrósú] (Heiban – [0])[1][2]

Verb
殺す • (korosu) godan (stem 殺し (koroshi), past 殺した (koroshita))
1. to kill, to put to death
2. to ruin, to spoil
```

<https://en.wiktionary.org/wiki/%E6%AE%BA%E3%81%99>

## Requirements

- [Deno](https://deno.land/)
- [Deno Deploy](https://deno.com/deploy) ( It runs [free](https://deno.com/deploy/pricing) )

## Local

```shell
deno run --allow-net --allow-read --watch ./app.ts
```

## Deploy

<https://deno.com/deploy/docs/deployctl>

## License

[MIT License](https://opensource.org/licenses/MIT)
