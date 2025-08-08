# 🔧 MongoDB Atlas Configuration for Render

## Important: Configure MongoDB Atlas Network Access

Since you're deploying to Render, you need to allow connections from Render's servers:

### Steps:

1. **Login to MongoDB Atlas**
   - Go to [cloud.mongodb.com](https://cloud.mongodb.com)
   - Login to your account

2. **Navigate to Network Access**
   - In your cluster dashboard
   - Click "Network Access" in the left sidebar

3. **Add IP Address**
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere"
   - IP Address: `0.0.0.0/0`
   - Description: "Render deployment"
   - Click "Confirm"

### ⚠️ Security Note:
While `0.0.0.0/0` allows connections from anywhere, your database is still protected by:
- Username/password authentication
- SSL/TLS encryption
- Your connection string is private

### Alternative (More Secure):
If you want to be more specific, you can add Render's IP ranges, but `0.0.0.0/0` is commonly used for cloud deployments and is secure with proper authentication.

## Database User Permissions

Make sure your database user has the right permissions:

1. **Database Access** → **Database Users**
2. **Edit** your user (`ayush`)
3. **Database User Privileges**: `Atlas admin` or `Read and write to any database`
4. **Save**

Your current connection string looks good:
```
mongodb+srv://ayush:Qwertyasdzxc123@cluster0.pp8gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

Once this is configured, your Render deployment will connect successfully to MongoDB Atlas!
