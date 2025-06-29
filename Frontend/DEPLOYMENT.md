# Portfolio Deployment Guide

## Deploying to Netlify

### Prerequisites
- A GitHub/GitLab/Bitbucket account
- Your portfolio code pushed to a repository

### Step 1: Prepare Your Repository
1. Make sure all your changes are committed and pushed to your repository
2. Ensure your repository is public or you have a paid Netlify plan for private repos

### Step 2: Deploy to Netlify

#### Option A: Deploy via Netlify UI (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, etc.)
4. Select your portfolio repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (or higher)
6. Click "Deploy site"

#### Option B: Deploy via Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Navigate to your project directory: `cd Frontend`
4. Deploy: `netlify deploy --prod`

### Step 3: Configure Custom Domain (Optional)
1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain
4. For Google search visibility, consider adding Google Search Console

### Step 4: SEO Optimization
1. Add your site to Google Search Console
2. Submit your sitemap (Netlify can generate one automatically)
3. Ensure your meta tags are properly set in your HTML

### Build Configuration
The project is configured with:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18+
- **SPA routing**: Configured to handle React Router
- **Security headers**: Added for better security
- **Asset caching**: Optimized for performance

### Troubleshooting
- If build fails, check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check for any environment variables if needed

### Performance Tips
- Images are optimized automatically by Vite
- CSS and JS are minified and chunked
- Assets are cached for better performance
- Consider adding a CDN for global distribution 