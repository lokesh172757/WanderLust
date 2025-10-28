# Wanderlust Project Setup Instructions

## Prerequisites
- Node.js installed
- MongoDB running locally
- Cloudinary account (free)

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Cloudinary (REQUIRED)
1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Go to your [Cloudinary Console](https://cloudinary.com/console)
4. Copy your Cloud Name, API Key, and API Secret
5. Update the `.env` file with your actual credentials:

```env
# Cloudinary Configuration (REQUIRED)
CLOUD_NAME=your_actual_cloud_name
CLOUD_API_KEY=your_actual_api_key
CLOUD_API_SECRET=your_actual_api_secret
```

### 3. Configure Mapbox (Optional)
1. Go to [https://mapbox.com](https://mapbox.com)
2. Sign up for a free account
3. Get your access token from the account dashboard
4. Update the `.env` file:

```env
# Mapbox Configuration (Optional)
MAP_TOKEN=your_actual_mapbox_token
```

### 4. Start MongoDB
Make sure MongoDB is running on your system.

### 5. Run the Application
```bash
node app.js
```

The application will be available at `http://localhost:8080`

## Features
- User authentication (signup/login)
- Create, edit, delete listings
- Image uploads to Cloudinary
- Interactive maps (with Mapbox token)
- Review system

## Important Notes
- **Cloudinary is REQUIRED** - The application will not start without proper Cloudinary configuration
- Images are automatically optimized and stored in Cloudinary
- Local file storage has been removed
- All images are served from Cloudinary CDN

