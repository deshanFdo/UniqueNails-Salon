# Unique Nails - Luxury Nail Salon Website

A beautiful, modern website for a solo nail artist business built with Next.js.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:3000** in your browser.

## ⚙️ Configuration

Edit `.env.local` to customize your website:

### Your Contact Info
```env
NEXT_PUBLIC_CONTACT_PHONE=+91 98765 43210
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_ADDRESS_LINE1=Your Street Address
NEXT_PUBLIC_ADDRESS_LINE2=City, State ZIP
```

### Social Media
```env
# Instagram profile URL
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your_handle

# Facebook page URL
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/your_page

# Pinterest profile
NEXT_PUBLIC_PINTEREST_URL=https://pinterest.com/your_profile

# WhatsApp (country code + number, no spaces or dashes)
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

### Business Hours
```env
NEXT_PUBLIC_HOURS_WEEKDAY=Monday – Friday: 9AM – 7PM
NEXT_PUBLIC_HOURS_SATURDAY=Saturday: 10AM – 6PM
NEXT_PUBLIC_HOURS_SUNDAY=Sunday: Closed
```

### Google Calendar (Optional)
To enable online booking:
1. Go to [calendar.google.com](https://calendar.google.com)
2. Create a calendar for appointments
3. Go to Settings → Calendar Settings → Integrate Calendar
4. Copy the embed URL and paste here:
```env
NEXT_PUBLIC_GOOGLE_CALENDAR_URL=your-embed-url
```

## 📁 Project Structure

```
salon-app/
├── .env.local              # ← Edit this file!
├── public/
│   └── images/gallery/     # Your nail art photos
├── src/
│   ├── app/
│   │   ├── page.js         # Home page
│   │   ├── services/       # Services & pricing
│   │   ├── gallery/        # Photo gallery
│   │   ├── about/          # About you
│   │   └── contact/        # Booking form
│   └── components/
│       ├── Navbar.js       # Navigation
│       ├── Footer.js       # Footer with social links
│       ├── ThemeToggle.js  # Day/Night mode
│       └── PageLoader.js   # Loading animation
```

## 🖼️ Adding Your Own Photos

Replace the images in `public/images/gallery/` with your nail art photos.

Keep the same filenames (nail-1.jpg through nail-12.jpg) or update the references in `src/app/gallery/page.js`.

## 🎨 Features

- ✅ Day/Night theme toggle
- ✅ Smooth scroll animations
- ✅ Mobile responsive
- ✅ Gallery with lightbox
- ✅ Booking form with validation
- ✅ WhatsApp quick contact
- ✅ Instagram integration
- ✅ Google Calendar booking
- ✅ Security headers
- ✅ SEO optimized

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📝 License

MIT License - Feel free to customize for your business!
