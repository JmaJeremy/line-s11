# Deploying S11 Website to Cloudflare Pages

This guide will walk you through deploying the LINXNET S11 website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works fine)
- A GitHub account
- Git installed on your computer

## Step 1: Prepare Your Repository

1. Initialize a git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: S11 website"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it something like `s11-rail-service`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/s11-rail-service.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Cloudflare Pages

1. Log in to your Cloudflare Dashboard at https://dash.cloudflare.com/

2. Navigate to **Pages** in the left sidebar

3. Click **Create a project**

4. Click **Connect to Git**

5. Authorize Cloudflare to access your GitHub account

6. Select your `s11-rail-service` repository

7. Configure your build settings:
   - **Project name**: `s11-rail-service` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

8. Click **Save and Deploy**

Cloudflare will now build and deploy your site. This usually takes 1-2 minutes.

## Step 3: Access Your Site

Once deployment is complete, your site will be available at:
```
https://s11-rail-service.pages.dev
```

You can also add a custom domain in the Cloudflare Pages settings.

## Automatic Deployments

Every time you push to the `main` branch, Cloudflare Pages will automatically rebuild and redeploy your site.

To update your site:
```bash
git add .
git commit -m "Update content"
git push
```

## Custom Domain (Optional)

To use a custom domain like `s11rail.com`:

1. In Cloudflare Pages, go to your project
2. Click on **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow the DNS configuration instructions

## Environment Variables

This project doesn't require any environment variables, but if you need to add them in the future:

1. Go to your project in Cloudflare Pages
2. Click **Settings** > **Environment variables**
3. Add your variables for Production and/or Preview environments

## Troubleshooting

### Build fails
- Check that `package.json` has all required dependencies
- Verify build command is `npm run build`
- Check build logs in Cloudflare dashboard

### Site loads but looks broken
- Ensure build output directory is set to `dist`
- Check browser console for errors
- Verify all assets are in the `public` folder

### 404 errors on page refresh
- The `_redirects` file should handle this
- Verify `public/_redirects` exists with content: `/*    /index.html   200`

## Performance Optimization

Cloudflare Pages automatically provides:
- Global CDN distribution
- Automatic HTTPS
- HTTP/2 and HTTP/3 support
- Brotli compression
- DDoS protection

Your site will load fast worldwide!

## Next Steps

1. Replace `/public/budd-rdc-s11.jpg` with an actual image of the Budd RDC train
2. Add any additional photos from your documents to the `public` folder
3. Update content as needed
4. Consider adding analytics (Cloudflare Web Analytics is free)

## Support

For Cloudflare Pages support, visit:
- Documentation: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/
