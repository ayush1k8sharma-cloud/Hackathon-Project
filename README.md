# 🏃‍♂️ FitLife - Fitness Website

**Team Name:** Innovators Hub  
**Team Code:** T071

## 👥 Team Members & Roles

| Name | Role | Responsibilities |
|------|------|-----------------|
| **Supriya** | HTML Developer | HTML structure and semantic markup |
| **Suman** | CSS Developer | Styling, responsive design, and animations |
| **Maansikandar Singh** | Full Frontend Developer | Frontend integration and user interface |
| **Ayush Sharma** | Full Frontend & Backend Developer | Complete project architecture, JavaScript functionality, and backend integration |

## 🎯 Problem Statement Selected

**"Health & Fitness Technology"** - Creating an accessible, user-friendly fitness platform that provides personalized workout plans, video tutorials, and nutrition guidance to help users maintain a healthy lifestyle from the comfort of their homes.

### Key Problems Addressed:
- **Lack of Personalized Fitness Guidance** - Many people struggle to find workout plans that match their fitness level
- **Limited Access to Professional Training** - Not everyone can afford personal trainers or gym memberships
- **Poor Nutrition Awareness** - Users need guidance on healthy eating habits and meal planning
- **Motivation & Consistency** - People need engaging content and progress tracking to stay motivated
- **Accessibility** - Fitness resources should be available to users of all technical skill levels

## 🌟 Features

### 🏠 Homepage
- Modern hero section with call-to-action
- Three feature containers with hover effects:
  - **Personalized Plans** - Custom workout plans for all fitness levels
  - **Video Workouts** - Interactive video library with categories
  - **Nutrition Tips** - Meal planning and nutrition guidance

### 💪 Video Workouts
- **Cardio Workouts** - 3 high-energy cardio sessions
- **Strength Training** - 6 comprehensive strength workouts
- **Flexibility & Stretching** - 6 flexibility and yoga sessions
- **HIIT Workouts** - 6 high-intensity interval training sessions
- Interactive tab switching between categories
- YouTube video integration

### 📋 Personalized Plans
- **Beginner Plan** - Perfect for fitness newcomers
- **Intermediate Plan** - For those ready to level up
- **Advanced Plan** - For experienced fitness enthusiasts
- Detailed features and benefits for each plan

### 🥗 Nutrition Tips
- Meal planning cards (Breakfast, Lunch, Dinner)
- Nutrition tips and healthy eating advice
- Interactive calorie calculator
- Dietary guidance and recommendations

## 🛠️ Tech Stack Used

### Frontend Technologies:
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox, grid, and animations
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Font Awesome 7.0.1** - Icons and visual elements
- **YouTube Embed API** - Video integration and streaming

### Development Tools:
- **Git** - Version control and collaboration
- **GitHub** - Code repository and project management
- **PowerShell** - Automation and deployment scripts
- **VS Code** - Code editor and development environment

### Design & UX:
- **Responsive Web Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout systems
- **CSS Animations** - Smooth transitions and hover effects
- **Progressive Web App** - Enhanced user experience

## 🚀 How to Run the Project

### Prerequisites
- A modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- No additional dependencies required
- Internet connection (for YouTube videos and Font Awesome icons)

### Setup Instructions

#### Method 1: Direct File Opening (Easiest)
1. **Download the project files** from GitHub
2. **Extract the zip file** to your desired location
3. **Double-click `index.html`** to open in your default browser
4. **Navigate through the website** using the menu and feature containers

#### Method 2: Local Server (Recommended)
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayush1k8sharma-cloud/Hackathon-Project.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Hackathon-Project
   ```

3. **Start a local server:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if installed)
   npx http-server
   ```

4. **Open your browser** and visit:
   - `http://localhost:8000` (Python server)
   - `http://localhost:8080` (Node.js server)

#### Method 3: Windows Batch File
1. **Double-click `run_website.bat`** in the project folder
2. **The website will open automatically** in your default browser

### Project Structure
```
Hackathon-Project/
├── index.html              # Homepage
├── workouts.html           # Video workouts (21 videos)
├── plans1.html            # Personalized plans
├── nutrition.html         # Nutrition tips & calculator
├── style.css              # Main stylesheet (2,700+ lines)
├── script.js              # JavaScript functionality
├── images/                # Image assets
├── README.md              # Project documentation
└── run_website.bat        # Windows launcher
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🎨 Design Features

- **Modern UI/UX** - Clean, professional design
- **Smooth Animations** - CSS transitions and hover effects
- **Interactive Elements** - Tab switching, calculators, and forms
- **Accessibility** - Semantic HTML and proper contrast ratios
- **Performance** - Optimized images and efficient CSS

## 📁 Project Structure

```
Hackathon-Project/
├── index.html              # Homepage
├── workouts.html           # Video workouts page
├── plans1.html            # Personalized plans page
├── nutrition.html         # Nutrition tips page
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
├── images/                # Image assets
│   ├── hero.jpg
│   ├── business.png
│   ├── workout.png
│   ├── nutrition-plan.png
│   └── ...
├── run_website.bat        # Windows batch file to run website
└── README.md              # This file
```

## 🎯 Key Pages

1. **Homepage** (`index.html`) - Landing page with feature overview
2. **Video Workouts** (`workouts.html`) - Interactive workout video library
3. **Personalized Plans** (`plans1.html`) - Detailed workout plans
4. **Nutrition Tips** (`nutrition.html`) - Nutrition guidance and calculator

## 🔧 Customization

### Adding New Videos
Edit `workouts.html` and add new video cards in the appropriate category sections.

### Modifying Styles
Update `style.css` to change colors, fonts, or layout.

### Adding New Features
Extend `script.js` with new interactive functionality.

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📝 Special Notes

### External APIs & Dependencies:
- **YouTube Embed API** - All workout videos are embedded from YouTube
- **Font Awesome CDN** - Icons loaded from external CDN
- **No API Keys Required** - All external services are publicly accessible

### Credentials & Configuration:
- **No Authentication Required** - Website is fully functional without login
- **No Database Dependencies** - All data is static and client-side
- **No Server Requirements** - Can run on any web server or locally

### Limitations & Considerations:
- **Internet Connection Required** - For YouTube videos and Font Awesome icons
- **Browser Compatibility** - Requires modern browsers (ES6+ support)
- **Mobile Optimization** - Optimized for mobile but may vary on very old devices
- **Video Loading** - YouTube videos may take time to load based on internet speed
- **Local Storage** - Uses browser localStorage for calculator data persistence

### Performance Notes:
- **Optimized Images** - All images are compressed for web delivery
- **Minified CSS** - Stylesheet is optimized for production
- **Lazy Loading** - Videos load only when needed
- **Responsive Images** - Images scale based on device size

### Security Considerations:
- **No User Data Collection** - Website doesn't store personal information
- **HTTPS Recommended** - For production deployment
- **Content Security Policy** - YouTube embeds are whitelisted

## 👥 Team Contact

**Innovators Hub (T071)**
- **Lead Developer**: Ayush Sharma - [@ayush1k8sharma-cloud](https://github.com/ayush1k8sharma-cloud)
- **Repository**: [Hackathon-Project](https://github.com/ayush1k8sharma-cloud/Hackathon-Project)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ayush1k8sharma-cloud/Hackathon-Project/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ by Innovators Hub for fitness enthusiasts worldwide**
