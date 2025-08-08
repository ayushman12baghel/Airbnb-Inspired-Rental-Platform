<<<<<<< HEAD
# Wanderlust - Travel Booking Platform

A full-stack web application for travel enthusiasts to explore, list, and book unique accommodations around the world.

## Features

- 🏠 **Listings Management**: Create, view, edit, and delete property listings
- 🗺️ **Interactive Maps**: Integrated with Leaflet and OpenCage geocoding
- 👤 **User Authentication**: Secure login/signup with Passport.js
- ⭐ **Reviews & Ratings**: Rate and review properties
- 📱 **Responsive Design**: Mobile-friendly interface
- ☁️ **Image Upload**: Cloudinary integration for image storage
- 🔍 **Search & Filter**: Find properties by location and category

## Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication middleware
- **Cloudinary** - Image storage and management
- **Node Geocoder** - Location services

### Frontend

- **EJS** - Template engine
- **Bootstrap** - UI framework
- **Leaflet** - Interactive maps
- **Font Awesome** - Icons

## Prerequisites

Before running this application, make sure you have:

- Node.js (>=18.0.0)
- MongoDB Atlas account
- Cloudinary account
- OpenCage API key

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Wanderlust
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   # Database Configuration
   ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust?retryWrites=true&w=majority

   # Session Secret (use a strong random string)
   SECRET=your-super-secret-session-key

   # Cloudinary Configuration
   CLOUD_NAME=your-cloudinary-cloud-name
   CLOUD_API_KEY=your-cloudinary-api-key
   CLOUD_API_SECRET=your-cloudinary-api-secret

   # OpenCage API Key for Geocoding
   MAP_TOKEN=your-opencage-api-key

   # Node Environment
   NODE_ENV=production

   # Port (optional, defaults to 8080)
   PORT=8080
   ```

4. **Initialize the database (optional)**
   ```bash
   node init/index.js
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The application will be available at `http://localhost:8080`

## Deployment

### Environment Setup

1. **MongoDB Atlas**

   - Create a MongoDB Atlas cluster
   - Whitelist your deployment platform's IP addresses
   - Get the connection string

2. **Cloudinary**

   - Sign up for a Cloudinary account
   - Get your cloud name, API key, and API secret

3. **OpenCage**
   - Sign up for an OpenCage account
   - Get your API key for geocoding services

### Deployment Platforms

#### Heroku

1. Install Heroku CLI
2. Create a new Heroku app
3. Set environment variables in Heroku dashboard
4. Deploy:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

#### Railway

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on push to main branch

#### Render

1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Choose "Web Service" and set build/start commands

## Project Structure

```
Wanderlust/
├── controllers/          # Route controllers
├── init/                # Database initialization
├── models/              # MongoDB models
├── public/              # Static assets
│   ├── css/
│   └── js/
├── routes/              # Express routes
├── utils/               # Utility functions
├── views/               # EJS templates
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
├── app.js               # Main application file
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## API Endpoints

### Listings

- `GET /listings` - Get all listings
- `GET /listings/new` - Show create form
- `POST /listings` - Create new listing
- `GET /listings/:id` - Show listing details
- `GET /listings/:id/edit` - Show edit form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews

- `POST /listings/:id/reviews` - Create review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Authentication

- `GET /signup` - Show signup form
- `POST /signup` - Create new user
- `GET /login` - Show login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Security Features

- Input validation with Joi
- XSS protection
- Authentication and authorization
- Session management with MongoDB store
- Environment variable protection

## License

This project is licensed under the ISC License.

## Support

For support, please contact [ayushmanbaghel12@gmail.com] or create an issue in the repository.
=======
﻿![Visitor Count](https://profile-counter.glitch.me/{ayushman12baghel}/count.svg)

Airbnb-Inspired Rental Platform

This project is a full-stack web application inspired by Airbnb, where users can browse listings, find places, upload ratings, and view locations on a map. Built with Node.js, Express.js, MongoDB, and EJS, it provides a smooth user experience for exploring and reviewing accommodations.

Tech Stack
🌐 Frontend: HTML, CSS, JavaScript, EJS
⚡ Backend: Node.js, Express.js
🗄️ Database: MongoDB
🗺️ Maps & Geocoding: Leaflet.js, OpenStreetMap, OpenCage API

Features
✔️ Browse available places from listings
✔️ Upload and view ratings for each location
✔️ View the place on an interactive map using Leaflet.js
✔️ Search locations using OpenCage Geocoder API
✔️ User authentication and session management
✔️ Responsive design for all devices

Map Integration
The application uses Leaflet.js to display an interactive map.
OpenStreetMap (OSM) is used as the tile provider.
OpenCage Geocoder API is integrated for location search functionality.
Users can view a listing's location on the map and search for new places.
>>>>>>> 690f522acf2f0b278b5bb20c0b9a7cfbe1c18789
