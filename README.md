# 🚀 Jagdish Everest - Portfolio Website



A modern, responsive portfolio website showcasing my journey as a Full-Stack Developer and Cybersecurity Enthusiast. Built with React, Tailwind CSS, and enhanced with smooth animations.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## ✨ FeaturesCurrently, two official plugins are available:



### 🎨 **Modern Design**- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)

- **Smooth Animations** - Powered by Framer Motion and Anime.js## Expanding the ESLint configuration

- **Gradient Aesthetics** - Beautiful cyan-to-purple gradient color scheme

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### 📱 **Interactive Sections**
- **Hero Section** - Dynamic typing animation showcasing multiple roles
- **About Me** - Professional photo, bio, and personal information
- **Skills Showcase** - Interactive skill bars with proficiency levels
- **Educational Journey** - Timeline of academic and professional milestones
- **Projects Portfolio** - Detailed project cards with technologies and features
- **Certifications** - Professional certifications and achievements
- **Contact Form** - Working contact form powered by EmailJS

### 🛠️ **Technical Features**
- **Single Page Application** - Smooth scrolling navigation
- **Intersection Observer** - Section-based navigation highlighting
- **Email Integration** - Direct contact form submissions
- **Resume Download** - One-click resume download functionality
- **SEO Optimized** - Meta tags and semantic HTML structure

## 🔧 Tech Stack

### **Frontend**
- **React 19.1.1** - Modern React with hooks and functional components
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Framer Motion 12.23.22** - Animation library for React
- **Anime.js 4.1.4** - Lightweight animation library

### **UI/UX**
- **React Icons 5.5.0** - Beautiful icon library
- **Inter & JetBrains Mono** - Modern typography
- **Responsive Grid System** - CSS Grid and Flexbox
- **Custom Animations** - Smooth transitions and micro-interactions

### **Development Tools**
- **Vite 7.1.2** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **EmailJS** - Contact form email service

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jagdisheverest2004/React-PortFolio.git
   cd React-PortFolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
React-PortFolio/
├── public/
│   ├── professional-photo.jpg    # Professional headshot
│   ├── Jagdish-Resume.pdf       # Downloadable resume
│   └── vite.svg                 # Favicon
├── src/
│   ├── components/
│   │   ├── SinglePagePortfolio.jsx  # Main portfolio component
│   │   ├── About.jsx               # About section (modular)
│   │   ├── Projects.jsx            # Projects section (modular)
│   │   ├── Contact.jsx             # Contact section (modular)
│   │   └── Achievements.jsx        # Achievements section (modular)
│   ├── contexts/
│   │   └── ThemeContext.jsx        # Theme management
│   ├── utils/
│   │   └── animations.js           # Anime.js animation utilities
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Key Sections

### **🏠 Hero Section**
- Dynamic typing animation with multiple role titles
- Professional headshot with floating contact info
- Call-to-action buttons for projects and contact
- Social media links (GitHub, LinkedIn, Email)

### **👨‍💻 About Me**
- Professional background and journey
- Technical skills with interactive progress bars
- Educational timeline with milestones
- Resume download functionality

### **💼 Projects**
Featured projects include:
- **Secure-Share** - File sharing with AES-256 GCM encryption
- **SPOOF-SHIELD** - Email spoofing detection system
- **Ecommerce Platform** - Spring Boot backend with REST APIs
- **Employee Management System** - Role-based access control
- **React Portfolio** - This very website!
- **API Development Suite** - Collection of RESTful APIs

### **🏆 Achievements**
- **Fortinet Certified Fundamentals in Cybersecurity**
- **NPTEL Programming in Java Certification**
- **NPTEL Joy of Computing using Python**

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template

2. **Update Configuration**
   ```javascript
   // In SinglePagePortfolio.jsx, replace placeholders:
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',        // Replace with your service ID
     'YOUR_TEMPLATE_ID',       // Replace with your template ID
     emailData,
     'YOUR_PUBLIC_KEY'         // Replace with your public key
   );
   ```

## 🎨 Customization

### **Color Scheme**
The portfolio uses a cyan-to-purple gradient theme. To customize colors, update the Tailwind classes:
- Primary: `cyan-400` to `cyan-600`
- Secondary: `purple-400` to `purple-600`
- Accent: Various complementary colors

### **Content Updates**
1. **Personal Information** - Update name, bio, and contact details in `SinglePagePortfolio.jsx`
2. **Projects** - Modify the `projects` array with your own projects
3. **Skills** - Update the `skills` array with your technologies
4. **Certifications** - Replace with your own achievements

### **Professional Photo**
Replace `public/professional-photo.jpg` with your own professional headshot (recommended: square aspect ratio, high resolution).

## 🚀 Deployment

### **GitHub Pages**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment scripts to package.json:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### **Vercel**
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Fast Loading**: Optimized assets and lazy loading
- **Mobile First**: Responsive design with mobile-first approach
- **Modern Standards**: ES6+, semantic HTML, accessible design

## 👤 About the Developer

**Jagdish Everest**
- 🎓 B.E. Computer Science Student at R.M.K. Engineering College
- 💻 Full-Stack Developer specializing in Java Spring Boot and React
- 🔐 Cybersecurity Enthusiast with certified credentials
- 📍 Based in Chennai, India

### **Connect with me:**
- 📧 Email: [jagdisheverest2004@gmail.com](mailto:jagdisheverest2004@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/jagdisheverest](https://linkedin.com/in/jagdisheverest)
- 🐙 GitHub: [github.com/jagdisheverest2004](https://github.com/jagdisheverest2004)

---

**⭐ If you found this portfolio inspiring, please give it a star!**

*Built with ❤️ and lots of ☕ by Jagdish Everest*