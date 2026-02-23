# Web3Forms Setup Instructions

## Getting Your Free Access Key

1. **Visit Web3Forms**: Go to https://web3forms.com

2. **Sign Up**: 
   - Click "Get Started Free"
   - Use email: **benkurut@gmail.com**
   - Create a password

3. **Get Your Access Key**:
   - After login, you'll see your Access Key on the dashboard
   - Copy the key (it looks like: `abc123def-4567-8901-2345-67890abcdef`)

4. **Add Key to Project**:
   - Open `/FrontEnd/.env` file
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=abc123def-4567-8901-2345-67890abcdef
   ```

5. **Restart Dev Server**:
   ```bash
   npm run dev
   ```

## How It Works

- When someone submits a prayer request, it's sent to: **benkurut@gmail.com**
- The email includes:
  - Submitter's name
  - Submitter's email (for replies)
  - Prayer request message
  
## Testing

1. Fill out the prayer request form on your site
2. Submit it
3. Check **benkurut@gmail.com** inbox for the prayer request email

## Important Notes

- ✅ **Completely Free** - unlimited submissions
- ✅ **No credit card required**
- ✅ **Works immediately** after adding access key
- 🔒 Keep your `.env` file private (already added to `.gitignore`)
- 📧 Set up email filters in Gmail to organize prayer requests

## Deploying to GitHub Pages

When deploying, you need to add the environment variable:

**Option 1: GitHub Secrets** (Recommended)
1. Go to your repo: Settings → Secrets and variables → Actions
2. Add: `VITE_WEB3FORMS_ACCESS_KEY` = your access key
3. Update deploy workflow to use secrets

**Option 2: Hardcode** (Quick but less secure)
- For a church website with public form, this is acceptable
- Replace `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` with the actual key directly in Contact.jsx

Let me know if you need help with deployment!
