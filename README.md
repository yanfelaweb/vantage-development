# Vantage Developments

**Building spaces. Creating better futures.**

Vantage Developments is a full-stack real estate web application designed to showcase residential and commercial properties, allow customers to submit inquiries, and provide administrators with tools to manage property listings.

## Live Project

- Website: https://vantage-development.vercel.app
- Backend API: https://vantage-backend-1fn9.onrender.com
- GitHub: https://github.com/yanfelaweb/vantage-development

## Features

### Public Website
- Responsive navigation and mobile-friendly layout
- Animated hero image slider with swipe navigation
- Light and dark themes with saved preferences
- Property listings with images, prices, and descriptions
- Individual property detail pages
- Contact and property inquiry form

### Admin Dashboard
- Admin login with JWT authentication
- Protected property management endpoints
- Add new property listings
- Edit existing properties
- Delete property listings

### Backend
- REST API built with Node.js and Express
- MongoDB Atlas database
- Mongoose data models
- Customer inquiry storage
- Password hashing with bcrypt

## Technology Stack

**Frontend**
- React
- Vite
- React Router
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens
- bcrypt

**Deployment**
- Vercel (frontend)
- Render (backend)
- GitHub (version control)

## Running Locally

### Prerequisites
- Node.js and npm
- MongoDB connection string
- Backend environment variables

### 1. Clone the Repository

```bash
git clone https://github.com/yanfelaweb/vantage-development.git
cd vantage-development
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Configure the Backend

Create a `.env` file inside the `server` directory.

Set the environment variables required by the backend, including the MongoDB connection string and JWT secret.

Never commit actual credentials or secrets to GitHub.

### 5. Start the Backend

From the `server` directory:

```bash
npm start
```

### 6. Start the Frontend

Open another terminal in the project root:

```bash
npm run dev
```

Open the local URL displayed by Vite.

## Project Architecture

- `src/` — React frontend components, pages, and styles
- `public/images/` — Public property images
- `server/models/` — MongoDB models
- `server/routes/` — Express API routes
- `server/index.js` — Backend application entry point

## Deployment

The React frontend is hosted on Vercel, while the Express backend is hosted on Render. MongoDB Atlas provides cloud database storage.

## Security

Admin routes use authentication, passwords are hashed, and sensitive environment variables are excluded from version control.

## Project Status

Completed and deployed.

## Author

TECHPRO Institute — React Production Project