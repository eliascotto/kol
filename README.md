# Kol

## Development

- server: `clj -M:dev -m user`
- app: `npx shadow-cljs -d cider/cider-nrepl:0.27.4 watch :render :main`
- styles `npm run styles-watch`
- electron: `npx electron .`

## Terminology

- `esexpr`: extended symbolic expression. Includes position, tag, type, children, etc.
- `vld`: visual language document. Represent the current document. Is composed by a series or `esexpr`.

## License

Copyright © 2022
