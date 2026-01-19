# LINXNET S11 - Barrie Rail Service Website

A modern React-based website promoting the S11 rail service proposal for Barrie, Ontario.

## Features

- Fast, responsive design built with React and Tailwind CSS
- Information about the S11 rail service connecting Barrie South to Allandale
- Details on integrated transit network including bus services
- Partnership approach and timeline information
- Optimized for deployment to Cloudflare Pages

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Deployment to Cloudflare Pages

1. Push this repository to GitHub
2. Log in to Cloudflare Dashboard
3. Go to Pages and create a new project
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Vite

The site will automatically deploy on every push to your main branch.

## Customization

- Replace `/public/budd-rdc-s11.jpg` with an actual image of a Budd RDC with S11 branding
- Update content in `src/App.jsx` as needed
- Modify colors in `tailwind.config.js` to match your branding

## About S11

The LINXNET S11 is a proposed express rail service connecting Barrie South to Allandale in under 10 minutes using efficient Budd Rail Diesel Cars. The project aims to launch in Spring 2026 as a cost-effective, rapid transit solution for Barrie.
