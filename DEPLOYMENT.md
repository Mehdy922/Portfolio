# 🚀 Deployment Guide

## Quick Start - GitHub Pages Deployment

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
5. Save the settings

### Step 2: Push Your Code

```bash
git add .
git commit -m "Deploy portfolio with improvements"
git push origin main
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

### Step 4: Access Your Site

Your portfolio will be available at:
```
https://<your-github-username>.github.io/<repository-name>/
```

For example, if your username is `Mehdy922` and repo is `portfolio`:
```
https://mehdy922.github.io/portfolio/
```

## 🔧 Fixing the White Screen Issue

The white screen issue on GitHub Pages is now fixed! Here's what was done:

1. **Changed Router**: Switched from `BrowserRouter` to `HashRouter` for better GitHub Pages compatibility
2. **Updated Base Path**: Set `base: './'` in `vite.config.ts` for relative paths
3. **Added GitHub Actions**: Automated deployment workflow

## 🖥️ Running Locally

To run the portfolio on your local machine:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Then open your browser to: **http://localhost:8080**

## 📝 What's New

### ✅ Added Features:
- **PakWheels Work Experience** - Your current Product Management Intern role
- **Enhanced UI** - Smooth animations, hover effects, and interactive elements
- **Better Navigation** - Active section highlighting and smooth scrolling
- **Improved Hero Section** - Better call-to-action buttons and animations
- **Work Experience Cards** - Professional display of both Salesforce and PakWheels roles
- **GitHub Actions Workflow** - Automatic deployment on push

### 🎨 UI Improvements:
- Smooth fade-in animations on page load
- Hover effects on all interactive elements
- Active navigation indicators
- Floating animations on images
- Gradient text effects
- Glow effects on buttons
- Better mobile responsiveness

## 🐛 Troubleshooting

### If the site doesn't load after deployment:

1. **Check GitHub Actions**:
   - Go to Actions tab
   - Make sure the workflow completed successfully
   - Check for any error messages

2. **Verify GitHub Pages Settings**:
   - Settings > Pages
   - Source should be "GitHub Actions"
   - Check if there's a deployment URL shown

3. **Clear Browser Cache**:
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or open in incognito/private mode

4. **Check Repository Visibility**:
   - For GitHub Pages to work, your repository should be public
   - Or you need GitHub Pro for private repo pages

### If you see 404 errors:

1. Make sure you're using the correct URL format
2. Wait a few minutes after deployment completes
3. Check that the `dist` folder was created during build

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub Actions logs for error messages
2. Verify all files were committed and pushed
3. Make sure Node.js 18+ is installed locally for testing

---

**Your portfolio is now ready to impress! 🎉**
