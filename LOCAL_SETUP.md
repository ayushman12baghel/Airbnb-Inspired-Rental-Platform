# 🔧 Running Wanderlust Locally - Complete Guide

## Issue Found: MongoDB Atlas Connection Problem

Your MongoDB Atlas cluster appears to be unavailable. Here are the solutions:

## Option 1: Fix MongoDB Atlas (Recommended for Production)

1. **Go to MongoDB Atlas Dashboard:**
   - Visit [cloud.mongodb.com](https://cloud.mongodb.com)
   - Login with your account
   - Check if your cluster `Cluster0` is running

2. **If cluster is paused:**
   - Click "Resume" to start it
   - Wait for it to become active (green status)

3. **If cluster doesn't exist:**
   - Create a new free cluster
   - Get the new connection string
   - Update your `.env` file

## Option 2: Use Local MongoDB (Quick Development)

1. **Install MongoDB locally:**
   ```bash
   # Download MongoDB Community Server from:
   # https://www.mongodb.com/try/download/community
   ```

2. **Update your `.env` file temporarily:**
   ```env
   # Comment out Atlas URL
   # ATLASDB_URL=mongodb+srv://ayush:Qwertyasdzxc123@cluster0.pp8gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

   # Use local MongoDB
   ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust

   # Keep other variables the same
   SECRET=ewfwefwefwfewefwef
   CLOUD_NAME=dqxmerwvv
   CLOUD_API_KEY=474939767884635
   CLOUD_API_SECRET=zBDgQCd0oErqDAHTkIvL2lTRirU
   MAP_TOKEN=c1b11fec1b2248fbb3866f3aec3adb1a
   ```

3. **Start MongoDB locally:**
   ```bash
   # If installed, start MongoDB service
   mongod
   ```

4. **Initialize with sample data:**
   ```bash
   node init/index.js
   ```

## Option 3: Alternative Free MongoDB Atlas

If your current cluster is deleted, create a new one:

1. **Create new MongoDB Atlas cluster:**
   - Go to [cloud.mongodb.com](https://cloud.mongodb.com)
   - Create new project
   - Create new FREE cluster
   - Get connection string

2. **Update `.env` with new connection string**

## Running the App Locally ✅

Once database is fixed:

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm run dev

# Or start production mode
npm start
```

**Your app will be available at:** `http://localhost:8080`

## Current Status ✅

- ✅ Code is working perfectly
- ✅ All dependencies installed
- ✅ Server starts correctly on port 8080
- ❌ Database connection needs fixing

Fix the database connection and your travel booking platform will run perfectly locally!
