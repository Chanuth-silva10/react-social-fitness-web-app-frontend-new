# 🏋️ React Social Fitness Web App - Frontend

A comprehensive social fitness platform built with React, enabling users to track workouts, share meal plans, set fitness goals, and connect with a fitness community.

## 🚀 Overview

This social fitness web application combines social networking with fitness tracking, allowing users to:
- Share fitness progress and achievements
- Create and track workout goals
- Plan and share meals with dietary preferences
- Monitor workout status and performance metrics
- Interact with other fitness enthusiasts through comments and likes

## ✨ Key Features

### 🔐 Authentication & User Management
- **Secure Login/Registration**: JWT-based authentication with form validation
- **Profile Management**: Customizable user profiles with profile images
- **User Discovery**: Browse and connect with other fitness enthusiasts

### 📝 Content Creation & Sharing
- **Multi-Type Posts**: Create posts for general updates, workout goals, status updates, and meal plans
- **Rich Media Support**: Upload images and videos for posts
- **Interactive Feed**: Like, comment, and share posts across different content types

### 🎯 Fitness Goal Tracking
- **Workout Goals**: Set specific exercise routines with:
  - Exercise types (Barbell Squats, Walking Lunges, Leg Press, etc.)
  - Target set counts (1-4 sets)
  - Repetition tracking
- **Goal Visualization**: Visual cards displaying goal progress and metrics

### 📊 Workout Status Monitoring
- **Performance Metrics**: Track key fitness indicators:
  - Distance run
  - Push-ups completed
  - Weight lifted
- **Progress Visualization**: Dashboard-style cards showing workout statistics

### 🍽️ Meal Planning & Nutrition
- **Meal Sharing**: Create posts with meal images and descriptions
- **Dietary Preferences**: Support for various diets:
  - Vegetarian
  - Vegan
  - Keto
- **Recipe Management**: Built-in recipe selection and sharing

### 💬 Social Interactions
- **Real-time Comments**: Comment on posts across all content types
- **Like System**: Express appreciation for posts and achievements
- **User Engagement**: Social features to build community connections

### 📱 User Experience
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS
- **Dark Theme**: Modern dark theme with consistent Material-UI components
- **Intuitive Navigation**: Easy-to-use sidebar navigation and tabbed interfaces

## 🏗️ Project Structure

```
react-social-fitness-web-app-frontend-new/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Redux/                    # State management
│   │   ├── Auth/                 # Authentication state
│   │   │   ├── auth.action.js
│   │   │   ├── auth.actionType.js
│   │   │   └── auth.reducer.js
│   │   ├── Post/                 # General posts state
│   │   ├── Goal/                 # Workout goals state
│   │   ├── Status/               # Workout status state
│   │   ├── MealPlan/             # Meal planning state
│   │   └── store.js              # Redux store configuration
│   ├── assets/                   # Static assets
│   │   ├── b1.png - b6.png      # Background images
│   │   └── logo.png
│   ├── components/               # Reusable UI components
│   │   ├── CreatePost/           # Post creation modal
│   │   ├── Goal/                 # Goal-related components
│   │   ├── HomeRight/            # Right sidebar components
│   │   ├── MealPlan/             # Meal planning components
│   │   ├── Middelpart/           # Main content area
│   │   ├── Post/                 # Post display components
│   │   ├── SearchUser/           # User search functionality
│   │   ├── Sidebar/              # Navigation sidebar
│   │   └── Status/               # Status tracking components
│   ├── config/
│   │   └── api.js                # API configuration
│   ├── pages/                    # Main application pages
│   │   ├── Authentication/       # Login/Register pages
│   │   ├── HomePage/             # Main dashboard
│   │   └── Profile/              # User profile pages
│   ├── theme/
│   │   └── DarkTheme.js          # Material-UI theme configuration
│   ├── utils/                    # Utility functions
│   │   ├── isLikedByReqUser.js   # Like status checker
│   │   └── uploadToCloudniry.js  # Image upload utility
│   ├── App.js                    # Main application component
│   ├── App.css                   # Application styles
│   ├── index.js                  # Application entry point
│   └── index.css                 # Global styles
├── package.json                  # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # Project documentation
```

## 🛠️ Technologies Used

### Core Technologies
- **React 18.2.0**: Modern React with hooks and functional components
- **Redux**: Predictable state container with Redux Toolkit patterns
- **React Router**: Declarative routing for React applications

### UI & Styling
- **Material-UI 5.0**: Comprehensive React component library
- **Tailwind CSS**: Utility-first CSS framework
- **Emotion**: CSS-in-JS library for component styling

### Form Management & Validation
- **Formik**: Build forms with validation and error handling
- **Yup**: Schema validation library

### HTTP Client & API
- **Axios**: Promise-based HTTP client for API communication

### Development Tools
- **Create React App**: Zero-configuration React development environment
- **PostCSS**: CSS processing with autoprefixer

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **npm** or **yarn**
- **Git** for version control

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Chanuth-silva10/react-social-fitness-web-app-frontend-new.git
   cd react-social-fitness-web-app-frontend-new
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   - Ensure the backend API is running on `http://localhost:5454`
   - Update the API base URL in `src/config/api.js` if needed

4. **Start the Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open the Application**
   - Navigate to `http://localhost:3000` in your browser
   - The app will automatically reload when you make changes

### Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm test`**: Launches the test runner in interactive watch mode
- **`npm run build`**: Builds the app for production to the `build` folder
- **`npm run eject`**: Ejects from Create React App (⚠️ irreversible)

## 🔧 Configuration

### API Configuration
Update the API base URL in `src/config/api.js`:
```javascript
export const API_BASE_URL = "http://localhost:5454"; // Update as needed
```

### Theme Customization
Modify the theme in `src/theme/DarkTheme.js` to customize the Material-UI theme.

### Tailwind Configuration
Extend Tailwind CSS configuration in `tailwind.config.js` for custom styling.

## 🏃‍♂️ Usage

### Creating Content
1. **Login/Register**: Create an account or login with existing credentials
2. **Create Posts**: Use the "+" button to create different types of content:
   - **General Posts**: Share updates with images/videos
   - **Workout Goals**: Set specific exercise goals with metrics
   - **Status Updates**: Track workout performance
   - **Meal Plans**: Share meals with dietary information

### Social Features
- **Browse Feed**: View posts from all users in the main feed
- **Interact**: Like and comment on posts
- **Profile**: View user profiles and their content history

### Navigation
- **Home**: Main feed with all content types
- **Meal Plans**: Filter to view only meal-related posts
- **Workout Goals**: View fitness goal posts
- **Workout Status**: See performance tracking posts
- **Profile**: Personal profile and content management

## 👨‍💻 Author

**Chanuth Silva**
- GitHub: [@Chanuth-silva10](https://github.com/Chanuth-silva10)

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- Tailwind CSS for the utility-first CSS framework
- React community for continuous innovation
- Fitness community for inspiration and feedback
