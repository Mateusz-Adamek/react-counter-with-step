# React Counter

Counter made in React.JS with custom step input. Built with [Vite](https://vite.dev/).

## Available Scripts

### `npm run dev`

Runs the app in development mode with hot module replacement.
Open the URL Vite prints (by default <http://localhost:5173/react-example-pages/>) to view it.

`npm start` is kept as an alias for the same thing.

### `npm test`

Runs the test suite once with [Vitest](https://vitest.dev/).
Use `npm run test:watch` for the interactive watch mode.

### `npm run build`

Builds the app for production into the `dist` folder, minified and with
hashed filenames.

### `npm run preview`

Serves the contents of `dist` locally, so you can check the production
build before deploying.

### `npm run deploy`

Builds the app and publishes `dist` to the `gh-pages` branch.

## Notes

The `base` option in `vite.config.js` must stay in sync with the `homepage`
field in `package.json` — both point at the subdirectory the app is served
from on GitHub Pages. If the paths disagree, the deployed page loads but
its CSS and JS 404.

This project was originally bootstrapped with Create React App and migrated
to Vite in 2026, since CRA is no longer maintained and was the source of
most of the repo's dependency advisories.
