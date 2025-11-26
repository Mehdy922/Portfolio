# Muhammad Mehdy Hasnain - Portfolio

A modern, interactive portfolio website showcasing my work as a software engineer with a product mindset.

## 🚀 Features

- **Responsive Design** - Works seamlessly on all devices
- **Interactive UI** - Smooth animations and hover effects
- **Work Experience** - Detailed showcase of professional experience at PakWheels and Salesforce
- **Project Timeline** - Visual timeline of featured projects
- **Skills Cloud** - Interactive 3D icon cloud displaying tech stack
- **Contact Form** - Direct WhatsApp integration for easy communication

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Lucide React** for icons
- **React Router** for navigation

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:8080
```

The site will automatically reload when you make changes.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

**Setup Steps:**

1. Go to your GitHub repository settings
2. Navigate to **Settings > Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Push your code to the `main` branch
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://<your-username>.github.io/<repository-name>/`

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## 📝 Customization

### Update Personal Information

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About & Experience**: Edit `src/components/About.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Update Colors

Colors are defined in `src/index.css` using CSS variables. Modify the `:root` section to change the color scheme.

## 🐛 Troubleshooting

### White Screen on GitHub Pages

If you see a white screen after deployment:

1. Ensure the `base` path in `vite.config.ts` is set correctly
2. Check that GitHub Pages is enabled in repository settings
3. Verify the GitHub Actions workflow completed successfully
4. Clear your browser cache and try again

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building with `npm run build`

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: mehdy922@gmail.com
- **Phone**: +92 3178453636
- **Location**: Lahore, Pakistan
- **GitHub**: [Mehdy922](https://github.com/Mehdy922)
- **LinkedIn**: [muhammadmehdy](https://www.linkedin.com/in/muhammadmehdy/)

---

Built with ❤️ by Muhammad Mehdy Hasnain
