# SAGGI TECH Backend Setup

This backend handles contact form submissions and sends emails to saggitechindia@gmail.com.

## Setup Instructions

### 1. Install Backend Dependencies

```bash
# Copy the backend package.json
cp backend-package.json package.json

# Install dependencies
npm install
```

### 2. Configure Email Settings

1. **Create a .env file** (copy from env-template.txt):
```bash
cp env-template.txt .env
```

2. **Set up Gmail App Password**:
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Go to Security > App passwords
   - Generate a new app password for "Mail"
   - Update the EMAIL_PASS in your .env file

3. **Update .env file**:
```
EMAIL_USER=saggitechindia@gmail.com
EMAIL_PASS=your-gmail-app-password-here
PORT=3001
```

### 3. Start the Backend Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001`

### 4. Test the API

Visit `http://localhost:3001/api/health` to verify the server is running.

## Features

- ✅ Contact form submission handling
- ✅ File upload support (PDF, DWG, STEP, IGES)
- ✅ Email notifications to saggitechindia@gmail.com
- ✅ Form validation
- ✅ Error handling
- ✅ File cleanup after email sending

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Email Template

The backend sends a professional HTML email with:
- Contact information
- Project details
- Attached files list
- Submission timestamp
- Professional formatting

## File Upload

- Maximum file size: 10MB per file
- Maximum files: 5 files per submission
- Supported formats: PDF, DWG, STEP, IGES, STP, IGS
- Files are automatically cleaned up after email sending
