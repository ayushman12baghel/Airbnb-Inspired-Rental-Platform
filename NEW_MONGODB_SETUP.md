# 🆓 MongoDB Atlas - New Account Setup Guide

## Why This Works:
- MongoDB Atlas gives **ONE FREE cluster per account**
- You already used yours for the meeting platform
- Solution: Create new account = new free cluster!

## Step-by-Step:

### 1. Create New MongoDB Atlas Account
- Go to [cloud.mongodb.com](https://cloud.mongodb.com)
- Use different email (try: `youremail+wanderlust@gmail.com`)
- Or use different signup method (Google/GitHub/Email)

### 2. Create Free Cluster
- Choose **M0 Sandbox** (FREE forever)
- Select region closest to you
- Cluster name: `Cluster0` or `WanderlustCluster`

### 3. Configure Database Access
- Create database user (username/password)
- Example: `wanderlust` / `password123`

### 4. Configure Network Access
- Add IP Address: `0.0.0.0/0` (Allow from anywhere)
- This allows connections from your local machine and Render

### 5. Get Connection String
- Click "Connect" → "Connect your application"
- Copy the connection string
- Replace `<password>` with your actual password

### 6. Update Your .env File
Replace the ATLASDB_URL in your .env with the new connection string:

```env
# OLD (broken)
# ATLASDB_URL=mongodb+srv://ayush:Qwertyasdzxc123@cluster0.pp8gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# NEW (your new cluster)
ATLASDB_URL=mongodb+srv://wanderlust:password123@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Keep everything else the same
SECRET=ewfwefwefwfewefwef
CLOUD_NAME=dqxmerwvv
CLOUD_API_KEY=474939767884635
CLOUD_API_SECRET=zBDgQCd0oErqDAHTkIvL2lTRirU
MAP_TOKEN=c1b11fec1b2248fbb3866f3aec3adb1a
```

## 💰 Cost: $0 (Completely FREE!)

- **M0 Sandbox**: 512MB storage, shared RAM
- **Perfect for development and small projects**
- **No credit card required**
- **No time limits**

## ✅ Benefits:
- Separate database for each project
- Free tier for both projects
- Professional setup
- Ready for production scaling later

Once you get the new connection string, just update your `.env` file and your Wanderlust app will work perfectly!
