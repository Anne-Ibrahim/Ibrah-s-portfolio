# Annah's Portfolio Website

A clean, modern portfolio website built with HTML, CSS, and JavaScript.

## 📁 File Structure

```
portfolio/
├── index.html          ← Home page (Hero + Featured Projects)
├── about.html          ← About page (Bio + Skills)
├── projects.html       ← Projects page (All project cards)
├── contact.html        ← Contact page (Form + Info)
├── css/
│   └── styles.css      ← All styles (variables, layout, components)
├── js/
│   └── script.js       ← JavaScript (menu toggle, animations, form)
├── images/             ← Add your own photos here
└── README.md           ← This file
```

## 🚀 How to Open

1. Download or unzip the project folder
2. Open `index.html` in any web browser — no server needed!
3. Click through all the nav links to explore each page

## ✏️ How to Customize

### Change the name / content
- Open any `.html` file in a text editor (VS Code recommended)
- Find "Lovie" and replace with your own name
- Update the bio text, project descriptions, email, etc.

### Change the accent color
- Open `css/styles.css`
- Find `--accent: #c8a97e;` near the top
- Replace `#c8a97e` with any color you like (e.g. `#3b82f6` for blue)

### Add a real photo
- Put your image in the `images/` folder
- In `about.html`, replace the placeholder div with:
  ```html
  <img src="images/your-photo.jpg" alt="Photo of [Your Name]" 
       style="width:100%; border-radius: 12px; object-fit: cover;" />
  ```

### Add real project links
- In `projects.html` and `index.html`, find `href="#"` on the card links
- Replace `#` with your actual GitHub repo URL or live demo URL

### Make the contact form actually send emails
- Sign up for [Formspree](https://formspree.io) (free)
- Add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag
- Remove the `e.preventDefault()` line in `script.js`

## 🎨 Design Choices

- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Colors**: Near-black `#0f0f0f`, warm white `#fafaf8`, gold accent `#c8a97e`
- **Layout**: CSS Flexbox and Grid throughout
- **Responsive**: Works on mobile, tablet, and desktop

## 📚 What You'll Learn From This Code

- HTML semantic structure (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- CSS custom properties (variables)
- Flexbox and Grid layouts
- CSS transitions and animations
- JavaScript DOM manipulation
- IntersectionObserver API for scroll animations
- Mobile-first responsive design with media queries
- Accessible HTML (aria labels, semantic elements)
