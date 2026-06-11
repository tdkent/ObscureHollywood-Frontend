# Obscure Hollywood – Frontend

> Documentation for the **React frontend** of [obscurehollywood.net](https://obscurehollywood.net).

## About

### Description

`obscurehollywood.com` is a content-driven website that features reviews, research and commentary about little-known Hollywood films and artists, particularly of the silent and early sound eras, that are worth revisiting.

### Features Overview

- Image assets served via AWS CloudFront CDN for high performance and low latency.
- Fetched data is cached to prevent redundant requests and load pages instantly.
- Fully responsive, accessible UI.
- Images rendered in efficient preprocessed AVIF and WebP formats.
- Integration and unit tests ensure reliability.

### Testing

UI testing is carried out using Vitest and RTL. Integration test coverage includes high-level routing and page rendering. Tests ensure Tanstack Router functionality and ability of users to access and correctly use top-level navigation elements from anywhere in the application.

### Tech Stack

- Language: `TypeScript`
- UI Library: `React`, `Tanstack Start`
- Components & Styling: `Daisy UI`, `Tailwind CSS`
- Routing Library: `Tanstack Router`
- Fetch Library: `Tanstack Query`
- Image Processing: `sharp`
- Lint &amp; Format: `Biome`, `Husky` (pre-commit)
- Testing: `Vitest`, `React Testing Library`
- Build Tool: `Vite`
- CI: `GitHub Actions`
- Deploy: `Netlify`

## UI

### Data Fetching

Using Tanstack Query, fetched data is cached in the user's browser. Once a route's data has been cached, any repeat requests to the webpage where the route originates will prompt Tanstack Query to pull the data from the cache rather than send another request to the server.

In addition to reducing unnecessary requests to `obscurehollywood.net`'s REST API, this caching strategy greatly reduces (or outright eliminates) page load time.

SSR is utilized on content-rich pages with high SEO importance. This ensures pre-rendering of metadata and HTML content on the server so that content can be correctly crawled and indexed by search engines.

### HTML Parsing

Website content is fetched from a REST API, including raw HTML strings. Each string is parsed for rendering using `html-react-parser`.

`<a>` tags are parsed and replaced with Tanstack Router `Link` components to utilize client-side routing. 

### Images

Each of the site's hundreds of image assets have been preprocessed by `sharp`, a Node.js image processing library, into multiple AVIF, WebP, and JPEG files of different sizes. Using the HTML `picture` element, the browser fetches the best available size and format for their device and display.

Images are cached and served via a CloudFront CDN.

"Lazy loading" of images, a process that delays loading images until they are actually in the user's display, is utilized to improve performance and load times.

## Additional Information

### Links

- [Backend repository](https://github.com/tdkent/ObscureHollywood-Backend)
- [Visit obscurehollywood.net](https://obscurehollywood.net)

### Local Development

> How to run the application locally. Requires Node.

```bash
# Install deps and run
npm install
npm run dev

# Lint and fix
npm run lint:fix

# Run tests
npm run test

# Build
npm run build
```

#### Environment variables

```
.env

VITE_BACKEND_URL=http://localhost:<PORT>
VITE_IMG_ASSETS_URL=<cdn url>
```