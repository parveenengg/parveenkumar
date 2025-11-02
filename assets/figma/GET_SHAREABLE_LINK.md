# How to Create a Figma Shareable Link

To link your Figma file in the portfolio (recommended for web viewing):

## Steps:

1. **Upload to Figma.com:**
   - Go to https://figma.com
   - Sign in to your account
   - Click "File" → "New" → "Import file"
   - Upload `TS00001.fig`
   - Wait for it to upload and open

2. **Get Shareable Link:**
   - Click the "Share" button (top right)
   - Set permissions to "Anyone with the link can view" (or "View only")
   - Copy the shareable link (e.g., `https://www.figma.com/file/...`)

3. **Update the Link:**
   - Open `work/college-management.html`
   - Find the project-link (line 139)
   - Replace `href="../Figma files/TS00001.fig"` with your Figma shareable link
   - Example: `href="https://www.figma.com/file/YOUR_FILE_ID/College-Management-System"`

## Current Setup:
The link currently points to the local file, which will:
- Download the file if clicked
- Open in Figma Desktop app if installed
- Require manual upload to view online

## Recommendation:
Use a Figma shareable link for better web experience - visitors can view the design directly in their browser without downloading!

