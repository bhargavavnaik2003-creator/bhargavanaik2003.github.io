# 🚀 My Portfolio Website

A premium, responsive personal portfolio website built with pure HTML, CSS, and JavaScript — featuring a dark theme, glassmorphism UI, smooth animations, and scroll-reveal effects.

## ✨ Features

- 🌙 **Dark Mode** — Sleek dark theme with purple/cyan gradient palette
- 🔮 **Glassmorphism** — Modern frosted-glass cards and panels
- 🎭 **Animations** — Scroll-reveal, floating orbit rings, cursor glow
- 📱 **Fully Responsive** — Mobile-first design, works on all screen sizes
- ⚡ **Pure HTML/CSS/JS** — No frameworks, no dependencies, blazing fast
- 🔍 **SEO Ready** — Semantic HTML, meta tags, Open Graph

## 📂 File Structure

```
portfolio/
├── index.html           # Main HTML
├── css/
│   └── style.css        # All styles
├── js/
│   └── main.js          # Interactions & animations
└── assets/
    ├── images/          # Profile photos, project screenshots
    │   ├── profile.jpg  # Your profile photo (hero section)
    │   ├── about.jpg    # About section image
    │   ├── project1.jpg # Project screenshots
    │   ├── project2.jpg
    │   └── project3.jpg
    └── resume.pdf       # Your resume (for download)
```

## 🛠️ Customization Guide

### 1. Update Personal Info
Open `index.html` and replace:
- `Your Name` → Your actual name
- `your@email.com` → Your email address
- `[Your City]` → Your location
- Social media links (GitHub, LinkedIn, Twitter) → Your profile URLs
- `YN.` in navbar → Your initials/logo text

### 2. Add Your Profile Photo
Place your photo at `assets/images/profile.jpg` (recommended: square, at least 400×400px)

### 3. Update Sections
- **About**: Update the bio paragraphs in `#about` section
- **Skills**: Modify skill cards with your actual skills and proficiency levels
- **Education**: Update the timeline items in `#education`
- **Experience**: Update the timeline items in `#experience`
- **Projects**: Replace project cards with your actual projects

### 4. Add Your Resume
Place your resume PDF at `assets/resume.pdf`

---

## 🌐 Hosting on GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)
4. Set it to **Public**
5. Click **Create repository**

### Step 2: Push Your Code

```bash
# In your portfolio folder
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io` within a few minutes! 🎉

### Alternative: Use Any Repository Name
If you don't want to use `yourusername.github.io`:
1. Create a repo with any name (e.g., `portfolio`)
2. Go to **Settings → Pages**, select `main` branch
3. Your site will be at `https://yourusername.github.io/portfolio`

---

## 🔄 Auto-Deploy with GitHub Actions

The included `.github/workflows/deploy.yml` automatically deploys your site whenever you push to the `main` branch.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ and lots of ☕
