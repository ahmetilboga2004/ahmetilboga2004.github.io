# Ahmet İlboga portfolio

Vue 3 and Vite portfolio published on GitHub Pages.

## Development

```sh
npm install
npm run dev
```

Check the production build with `npm run build`.

## Project photos and videos

Project content is in [`src/data/data.js`](src/data/data.js). Add an optional `media` array to a project. The first item becomes a compact preview; clicking it opens the gallery. Videos load only when opened.

```js
media: [
  { type: 'image', src: 'https://your-media-host.example/overview.webp', alt: 'Project dashboard' },
  { type: 'video', src: 'https://your-media-host.example/demo.mp4', poster: 'https://your-media-host.example/poster.webp', alt: 'Short demo' },
  { type: 'youtube', videoId: 'YOUR_VIDEO_ID', poster: 'https://your-media-host.example/poster.webp', alt: 'Walkthrough' },
],
```

Upload media to a public media host such as Cloudinary and paste its HTTPS delivery URLs here. For YouTube, use the video ID. Use WebP or AVIF screenshots sized for the site and a poster image for each video. An empty or missing `media` array keeps the project text-only. Only URLs go in Git; storage and bandwidth stay with the media host. Public pages and their media are viewable by anyone, including when a video is unlisted. Never put upload keys or other secrets in this frontend repository.
