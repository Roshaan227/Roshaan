#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Testing build process...\n');

try {
  // Clean previous build
  if (fs.existsSync('dist')) {
    console.log('📁 Cleaning previous build...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if build was successful
  if (fs.existsSync('dist')) {
    console.log('\n✅ Build successful!');
    console.log('📁 Build output directory: dist/');
    
    // List build contents
    const buildContents = fs.readdirSync('dist');
    console.log('📋 Build contents:', buildContents.join(', '));
    
    console.log('\n🎉 Your portfolio is ready for deployment!');
    console.log('📝 Next steps:');
    console.log('   1. Push your code to GitHub/GitLab');
    console.log('   2. Connect your repository to Netlify');
    console.log('   3. Deploy!');
  } else {
    console.log('\n❌ Build failed - dist directory not found');
    process.exit(1);
  }

} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
} 