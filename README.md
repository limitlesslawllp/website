# Eliahu Law Firm Website

A modern, elegant, and professional website for Eliahu Law Firm, inspired by top-tier law firm designs. This website features a responsive design, smooth animations, and a user-friendly interface optimized for personal injury law practice.

## Features

### 🎨 Design & Layout
- **Modern Hero Section** with compelling call-to-action
- **Professional Color Scheme** using gold (#d4af37) and dark (#1a1a1a) accents
- **Elegant Typography** with Playfair Display for headings and Inter for body text
- **Fully Responsive** design that works on all devices
- **Smooth Animations** and hover effects throughout

### 📱 User Experience
- **Fixed Navigation** with smooth scrolling
- **Mobile-Friendly** hamburger menu
- **Interactive FAQ** accordion section
- **Contact Form** with validation
- **Scroll Progress Indicator**
- **Lazy Loading** for images

### 🏛️ Law Firm Specific Features
- **Practice Areas** showcase (Car Accidents, Truck Accidents, etc.)
- **Attorney Profiles** with credentials and photos
- **Client Testimonials** with star ratings
- **Proven Results** section with settlement amounts
- **Free Consultation** call-to-action throughout
- **Professional Contact Information**

## File Structure

```
Eliahu Law Firm/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript for interactivity
├── tell-us-about-your-case/
│   └── index.html      # Case list and customer info flow
└── README.md           # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No server required**: The website works as a static site
3. **Customize content**: Edit the HTML file to update firm information, attorney details, and contact information

## Customization

### Updating Firm Information
- **Firm Name**: Change "Eliahu Law Firm" in the HTML
- **Phone Number**: Update all instances of "(555) 123-4567"
- **Email**: Update "info@eliahu-law.com" throughout
- **Address**: Modify the address in contact section and footer

### Adding/Removing Attorneys
1. Find the `.attorneys-grid` section in `index.html`
2. Copy the `.attorney-card` structure
3. Update the image source, name, title, description, and credentials

### Modifying Practice Areas
1. Locate the `.practice-grid` section
2. Add or remove `.practice-card` elements
3. Update the icons, titles, and descriptions

### Color Scheme
The main colors can be changed in `styles.css`:
- **Primary Gold**: `#d4af37`
- **Dark Background**: `#1a1a1a`
- **Text Color**: `#333`
- **Light Background**: `#f8f9fa`

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Features

- **Optimized Images**: Uses Unsplash for high-quality placeholder images
- **Minimal Dependencies**: Only uses Font Awesome and Google Fonts
- **Fast Loading**: Lightweight CSS and JavaScript
- **SEO Friendly**: Semantic HTML structure

## Contact Form

The contact form includes:
- **Client-side validation** for required fields
- **Email format validation**
- **Form submission simulation** (replace with actual backend)
- **Loading states** during submission

## Future Enhancements

Consider adding:
- **Backend integration** for contact form
- **Analytics tracking** (Google Analytics)
- **Blog section** for legal insights
- **Case studies** page
- **Online appointment booking**
- **Multi-language support**

## License

This website template is created for Eliahu Law Firm. Feel free to customize and use for your law firm.

---

**Built with ❤️ for the legal profession**
