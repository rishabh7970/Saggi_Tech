const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.dwg', '.step', '.iges', '.stp', '.igs'];
    const fileExt = path.extname(file.originalname).toLowerCase();
    
    if (allowedTypes.includes(fileExt)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DWG, STEP, IGES files are allowed.'));
    }
  }
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'saggitechindia@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password' // Use App Password for Gmail
  }
});

// Contact form endpoint
app.post('/api/contact', upload.array('files', 5), async (req, res) => {
  try {
    const { name, company, email, phone, inquiryType, message } = req.body;
    const files = req.files || [];

    // Validate required fields
    if (!name || !company || !email || !inquiryType || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields.' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'saggitechindia@gmail.com',
      to: 'saggitechindia@gmail.com',
      subject: `New ${inquiryType} Inquiry from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          ${files.length > 0 ? `
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Attached Files (${files.length})</h3>
            <ul style="margin: 0; padding-left: 20px;">
              ${files.map(file => `<li>${file.originalname}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #065f46; margin: 0; font-size: 14px;">
              <strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              This email was sent from the SAGGI TECH website contact form.
            </p>
          </div>
        </div>
      `,
      attachments: files.map(file => ({
        filename: file.originalname,
        path: file.path
      }))
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up uploaded files after sending email
    files.forEach(file => {
      fs.unlink(file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    });

    res.json({ 
      success: true, 
      message: 'Your inquiry has been sent successfully! We will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your inquiry. Please try again or contact us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SAGGI TECH API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
