# College Club Management System

A modern, artistic, and feature-rich college club management system built with React, TypeScript, and CSS. This application provides a comprehensive solution for managing clubs, events, registrations, and certificates.

## ✨ Features

### 🏠 Home Page
- Beautiful hero section with animated floating shapes
- Club showcase with 6 different clubs
- Gradient-based card design with hover effects
- Feature highlights section

### 📅 Events Management
- **Interactive Calendar**: View, add, edit, and delete events
- **Past Events Gallery**: Scrolling animation gallery with event details
- **Feedback System**: Submit and collect event feedback with star ratings

### 📝 Registration System
- **Registration Forms**: Easy-to-use forms for club and event registration
- **E-Certificate Generation**: Beautiful certificate display and download functionality
- **Certificate Management**: Admin can upload certificates for participants

### 👥 Admin Panel
- **Secure Login**: Protected admin access with authentication
- **Registration Data View**: View all submitted registration forms
- **Event Management**: Full CRUD operations for events
- **Certificate Upload**: Upload and manage certificates

### 🎨 Design Features
- **Dark/Light Mode Toggle**: Seamless theme switching
- **Responsive Design**: Mobile-first approach, works on all devices
- **Beautiful Animations**: Smooth transitions and engaging animations
- **No Inline Styles**: All styles in separate CSS files for maintainability

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd JssClub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── Navigation/      # Navigation bar component
├── context/             # React Context providers
│   ├── AuthContext.tsx  # Authentication state management
│   └── ThemeContext.tsx # Theme (dark/light) management
├── pages/               # Page components
│   ├── Home/            # Home page
│   ├── Events/          # Events pages (Calendar, Past Events, Feedback)
│   ├── Registration/    # Registration and E-Certificate pages
│   ├── Contact/         # Contact page
│   └── Admin/           # Admin login and dashboard
├── styles/              # Global styles
│   └── index.css        # CSS variables and base styles
├── utils/               # Utility functions
│   └── storage.ts       # LocalStorage helpers
├── App.tsx              # Main app component
└── index.tsx            # Entry point
```

## 🔑 Admin Credentials

Default admin credentials:
- **Username**: `admin`
- **Password**: `admin123`

⚠️ **Important**: Change these credentials in production!

## 🎯 Key Technologies

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **React Router**: Client-side routing
- **date-fns**: Date manipulation and formatting
- **CSS3**: Modern CSS with variables, animations, and gradients
- **LocalStorage**: Client-side data persistence

## 📱 Pages Overview

1. **Home** (`/`): Club introduction and features
2. **Events** (`/events`): 
   - Calendar view with event management
   - Past events gallery with scrolling animations
   - Feedback submission page
3. **Registration** (`/registration`):
   - Club/event registration form
   - E-certificate search and download
4. **Contact** (`/contact`): Contact form and information
5. **Admin** (`/admin`): Admin login and dashboard

## 🎨 Styling Approach

- **CSS Variables**: Theme-aware colors using CSS custom properties
- **Separate CSS Files**: Each component has its own CSS file
- **No Inline Styles**: Maintainability and separation of concerns
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Smooth Animations**: CSS transitions and keyframe animations

## 🔒 Authentication

The admin section uses a simple authentication system with localStorage. For production, consider implementing:
- JWT tokens
- Backend authentication
- Role-based access control
- Session management

## 💾 Data Storage

Currently, all data is stored in browser localStorage. For production:
- Implement a backend API
- Use a database (MongoDB, PostgreSQL, etc.)
- Add data validation and sanitization

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

The project is ready to deploy! Check out `DEPLOYMENT.md` for detailed hosting instructions.

**Quick Deploy Options:**

### Netlify (Easiest)
1. Build: `npm run build`
2. Drag and drop the `build` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Vercel
1. Push to GitHub
2. Connect at [vercel.com](https://vercel.com)
3. Deploy automatically!

### Other Platforms
See `DEPLOYMENT.md` for Firebase, GitHub Pages, Surge, AWS, and more options.

## 📝 Future Enhancements

- Backend integration with REST/GraphQL API
- Database integration
- Email notifications
- Image upload for events and certificates
- Multi-user admin system
- Advanced search and filtering
- Export data to CSV/PDF
- Social media integration
- Push notifications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ for college club management.

---

**Note**: This is a frontend-only application. For production use, integrate with a proper backend system for authentication, data persistence, and security.

