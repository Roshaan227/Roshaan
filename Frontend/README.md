# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## 🚀 Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)

## 📋 Features

- ⚡ Fast and optimized with Vite
- 🎨 Modern UI with CSS custom properties
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🚀 Ready for production deployment

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **Deployment**: Netlify

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Push to Git**: Ensure your code is pushed to GitHub/GitLab/Bitbucket
2. **Connect to Netlify**: 
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`
4. **Deploy**: Click "Deploy site"

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 📁 Project Structure

```
Frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── context/         # React context
│   ├── styles/          # Global styles
│   └── assets/          # Images and icons
├── netlify.toml         # Netlify configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment settings
- `vite.config.js` - Vite build configuration
- `public/_redirects` - SPA routing for Netlify

## 📈 Performance

- ⚡ Optimized bundle size
- 🖼️ Image optimization
- 📦 Code splitting
- 🗜️ Gzip compression
- 💾 Asset caching

## 🔍 SEO

- Meta tags optimization
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🎨 Customization

1. Update content in component files
2. Modify colors in `src/styles/colors.css`
3. Add your projects in `src/components/projects/Projects.jsx`
4. Update personal information in respective components

## 📞 Support

For deployment issues, check:
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
