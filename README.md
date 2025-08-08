# Interactive Portfolio Website

A modern, responsive portfolio website with interactive features and smooth animations. Perfect for showcasing your skills, projects, and professional experience.

## Features

### 🎨 Modern Design
- Clean, professional layout
- Responsive design that works on all devices
- Smooth animations and hover effects
- Modern color scheme with blue accent colors

### 🚀 Interactive Elements
- Animated navigation with active link highlighting
- Mobile-friendly hamburger menu
- Project modal popups with detailed information
- Interactive contact form with validation
- Smooth scrolling between sections
- Typing animation for the hero title
- 3D tilt effects on project cards

### 📱 Responsive
- Mobile-first design approach
- Optimized for tablets and desktop
- Flexible grid layouts
- Touch-friendly navigation

## Sections Included

1. **Hero Section** - Introduction with call-to-action buttons
2. **About** - Personal information and statistics
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with modal details
5. **Contact** - Contact information and working form

## Customization Guide

### Personal Information
Replace the following placeholders in `index.html`:

- `Your Name` - Replace with your actual name
- `your.email@example.com` - Your email address
- `+1 (555) 123-4567` - Your phone number
- `Your City, State` - Your location
- Social media links (GitHub, LinkedIn, Twitter)

### Projects
Update the project data in `script.js` in the `projectData` object:

```javascript
const projectData = {
    project1: {
        title: 'Your Project Title',
        description: 'Project description...',
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        features: ['Feature 1', 'Feature 2'],
        github: 'https://github.com/yourusername/project',
        demo: 'https://your-demo-url.com'
    }
    // Add more projects...
};
```

### Skills
Modify the skills in the HTML file under the Skills section. Add or remove skill categories and items as needed.

### Colors and Styling
The main color scheme uses:
- Primary: `#2563eb` (Blue)
- Secondary: `#1d4ed8` (Darker Blue)
- Text: `#1e293b` (Dark Gray)
- Light text: `#64748b` (Gray)
- Background: `#f8fafc` (Light Gray)

To change colors, update the CSS variables in `styles.css`.

### Images
Replace the placeholder icons with actual images:
- Add a profile photo to replace the user icon in the hero section
- Add project screenshots to replace the placeholder icons
- Update the CSS to use `background-image` instead of icons

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Setup Instructions

1. Download or clone the project files
2. Open `index.html` in a web browser
3. For development, use a local server (like Live Server in VS Code)
4. Customize the content as described above

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly

### Vercel
1. Import the project from GitHub
2. Deploy with zero configuration

## Performance Features

- Optimized CSS with efficient selectors
- Lazy loading animations
- Minimal JavaScript for fast loading
- Compressed and optimized code

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

## Future Enhancements

Consider adding:
- Blog section
- Dark mode toggle
- More animation libraries (AOS, GSAP)
- CMS integration
- Analytics tracking
- SEO optimization

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing this portfolio, feel free to reach out or check the documentation for each section.

---

**Happy coding!** 🚀
