# ⚡ Quick Start Guide

## 🖥️ Run Locally (Development)

```bash
npm run dev
```

Open browser to: **http://localhost:8080**

---

## 🚀 Deploy to GitHub Pages

### One-Time Setup:
1. Go to GitHub repo → **Settings** → **Pages**
2. Under "Build and deployment" → Source: **GitHub Actions**

### Deploy:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

**That's it!** Your site will be live in 2-3 minutes at:
```
https://<your-username>.github.io/<repo-name>/
```

---

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies (first time) |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## ✅ What's Been Fixed

✓ GitHub Pages white screen issue - **FIXED**  
✓ Added PakWheels work experience  
✓ Enhanced UI with animations and effects  
✓ Improved navigation and interactivity  
✓ Added automatic deployment workflow  

---

## 🎯 Your Portfolio Includes

- **Hero Section** - Introduction with contact info
- **About Section** - Bio + Work Experience (Salesforce & PakWheels)
- **Projects Section** - Timeline of featured projects
- **Skills Section** - Interactive tech stack cloud
- **Contact Section** - WhatsApp-integrated contact form

---

## 🆘 Quick Troubleshooting

**White screen after deploy?**
- Wait 2-3 minutes for deployment to complete
- Clear browser cache (Ctrl+Shift+R)
- Check GitHub Actions tab for deployment status

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

**Need more details?** Check `README.md` or `DEPLOYMENT.md`

**Ready to deploy? Just push to main branch!** 🚀
