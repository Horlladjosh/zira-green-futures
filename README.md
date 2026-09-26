# ZiRA Green Futures Initiative

Vercel-ready Next.js website for ZiRA Green Futures Initiative.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` for the website and
`http://localhost:3000/style-guide` for the design-system reference.

## Production check

```bash
pnpm build
pnpm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js**.
4. Keep the default build and output settings.
5. Deploy. Future pushes to the production branch will deploy automatically.

The project requires Node.js 22 and pnpm 11.25.0, both declared in
`package.json`.

## Design system

- Brand and layout tokens: `app/globals.css`
- Style-guide route: `app/style-guide/page.tsx`
- Style-guide presentation: `app/style-guide/style-guide.module.css`
- Responsive breakpoints: 980px for tablet layouts and 640px for mobile layouts

The homepage remains a single responsive experience. Desktop uses multi-column
layouts, tablet reduces grids and stacks split sections, and mobile uses a
single-column flow with smaller gutters and touch-friendly controls.
