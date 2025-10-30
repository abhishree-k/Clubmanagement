# Deployment Guide

This guide will help you deploy your College Club Management System to various hosting platforms.

## Prerequisites

1. Build the project:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Hosting Options

### 1. Netlify (Recommended - Easiest)

#### Option A: Netlify Drop (Drag & Drop)
1. Build your project: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop your `build` folder
4. Your site is live instantly!

#### Option B: Netlify via Git
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click "Deploy site"

**Note**: For React Router to work, create `public/_redirects` file:
```
/*    /index.html   200
```

### 2. Vercel (Recommended for React)

#### Via Vercel CLI
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
npm run build
vercel
```

#### Via Vercel Dashboard
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects React and configures it
5. Deploy!

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/JssClub",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages in repository settings

**Note**: Install `react-router-dom` with BrowserRouter and add base path if needed.

### 4. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```
- Select `build` as public directory
- Configure as single-page app: Yes
- Don't overwrite index.html: No

4. Deploy:
```bash
npm run build
firebase deploy
```

### 5. AWS S3 + CloudFront

1. Create S3 bucket
2. Enable static website hosting
3. Upload `build` folder contents
4. Set bucket policy for public read access
5. Create CloudFront distribution
6. Point to S3 bucket

### 6. Surge.sh

1. Install Surge:
```bash
npm install -g surge
```

2. Deploy:
```bash
npm run build
cd build
surge
```

3. Follow prompts (use your domain or get a free .surge.sh domain)

### 7. Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Static Site
4. Connect repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Deploy

## Environment Variables (if needed later)

If you add environment variables, create `.env` file:
```
REACT_APP_API_URL=https://your-api.com
```

For production, set these in your hosting platform's dashboard.

## Post-Deployment Checklist

- [ ] Test all routes (Home, Events, Registration, Contact, Admin)
- [ ] Verify dark/light mode toggle works
- [ ] Test responsive design on mobile
- [ ] Check that forms submit correctly
- [ ] Verify admin login works
- [ ] Test event calendar functionality
- [ ] Check certificate generation
- [ ] Verify animations work smoothly

## Custom Domain Setup

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

### Vercel
1. Project settings → Domains
2. Add your domain
3. Configure DNS

## SSL/HTTPS

Most platforms provide free SSL certificates automatically:
- Netlify: ✅ Automatic
- Vercel: ✅ Automatic
- Firebase: ✅ Automatic
- GitHub Pages: ✅ Automatic
- Surge: ✅ Automatic

## Performance Optimization

Your build is already optimized, but you can:
1. Enable Gzip compression (automatic on most platforms)
2. Enable CDN (automatic on most platforms)
3. Add lazy loading for images (future enhancement)

## Troubleshooting

### Routes not working (404 errors)
- Ensure your hosting platform is configured for single-page apps
- Add redirect rules (`_redirects` file for Netlify, `vercel.json` for Vercel)

### Build fails
- Check Node.js version (should be 14+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Styles not loading
- Ensure all CSS files are imported correctly
- Check that `index.css` is imported in `index.tsx`

## Quick Deploy Commands Summary

```bash
# Build for production
npm run build

# Netlify (after installing Netlify CLI)
netlify deploy --prod --dir=build

# Vercel
vercel --prod

# Surge
surge build

# Firebase
firebase deploy
```

## Need Help?

- Check platform-specific documentation
- Review React deployment guide: https://create-react-app.dev/docs/deployment/
- Check console for errors

Happy deploying! 🚀

