# 🚀 Deploy Wanderlust to Render (FREE)

## Step-by-Step Render Deployment Guide

### Phase 1: Prepare Your Repository

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

### Phase 2: Create Render Account & Deploy

1. **Sign up for Render**
   - Go to [render.com](https://render.com)
   - Sign up using your GitHub account (FREE)

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `ayushman12baghel/Wanderlust`
   - Choose "Deploy from Git"

3. **Configure Deployment Settings**
   - **Name**: `wanderlust-ayush` (or any unique name)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Choose "Free" (FREE TIER!)

### Phase 3: Set Environment Variables

In Render dashboard, go to "Environment" and add these variables:

```
ATLASDB_URL=mongodb+srv://ayush:Qwertyasdzxc123@cluster0.pp8gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

SECRET=ewfwefwefwfewefwef

CLOUD_NAME=dqxmerwvv
CLOUD_API_KEY=474939767884635
CLOUD_API_SECRET=zBDgQCd0oErqDAHTkIvL2lTRirU

MAP_TOKEN=c1b11fec1b2248fbb3866f3aec3adb1a

NODE_ENV=production
```

### Phase 4: Deploy!

1. Click "Deploy Web Service"
2. Wait for build to complete (usually 2-5 minutes)
3. Your app will be live at: `https://wanderlust-ayush.onrender.com`

## 🎯 What to Expect

### ✅ Render Free Tier Includes:
- **512MB RAM** - Perfect for your app
- **Custom domain** - Free .onrender.com subdomain
- **SSL certificate** - HTTPS enabled automatically
- **Continuous deployment** - Auto-deploys on Git push
- **No time limits** - Unlike Heroku, no sleep mode

### ⚠️ Free Tier Limitations:
- **Spins down after 15 minutes of inactivity** (first request after inactivity takes ~30 seconds)
- **750 hours/month** - Plenty for testing and showcase

## 🔧 Troubleshooting Tips

If deployment fails:

1. **Check Render logs** in the dashboard
2. **Verify MongoDB Atlas** allows connections from anywhere (0.0.0.0/0)
3. **Ensure all environment variables** are set correctly

## 🎉 Post-Deployment

Once deployed, your Wanderlust app will have:
- ✅ User authentication
- ✅ Image uploads (Cloudinary)
- ✅ Interactive maps
- ✅ Database connectivity (MongoDB Atlas)
- ✅ HTTPS security
- ✅ Professional URL

## 💰 Cost: $0 (FREE!)

Perfect for:
- Portfolio showcase
- Demo for potential employers
- Learning and development
- Small-scale usage

Your travel booking platform will be live and fully functional on Render's free tier!
