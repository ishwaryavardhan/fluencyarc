import nodemailer from 'nodemailer';

// Email configuration interface
export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Email options interface
export interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
}

// Cached transporter for performance
let transporter: nodemailer.Transporter | null = null;

// Get email configuration from environment variables
export const getEmailConfig = (): EmailConfig => ({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER || 'fluencyarc1@gmail.com',
    pass: process.env.GMAIL_PASS || 'jmap mnbj pune iqlb'
  }
});

// Create and return cached nodemailer transporter
export const createEmailTransporter = () => {
  if (!transporter) {
    const config = getEmailConfig();
    transporter = nodemailer.createTransport(config);
  }
  return transporter;
};

// Send email function with connection pooling
export const sendEmail = async (options: EmailOptions) => {
  const mailTransporter = createEmailTransporter();
  
  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text || options.html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' '),
    // Performance optimizations
    priority: 'high' as const,
    headers: {
      'X-Priority': '1',
      'X-MSMail-Priority': 'High'
    }
  };

  // Send with longer timeout for Gmail reliability
  return await Promise.race([
    mailTransporter.sendMail(mailOptions),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email timeout')), 30000)
    )
  ]);
};

// Get default FROM email based on provider
export const getDefaultFromEmail = (): string => {
  return process.env.GMAIL_USER || 'fluencyarc1@gmail.com';
};

// Get default TO email based on provider
export const getDefaultToEmail = (): string => {
  return process.env.GMAIL_TO || 'naresh@fluencyarc.com';
};

// Email templates
export const emailTemplates = {
  registration: (data: {
    name: string;
    email: string;
    phone: string;
    level: string;
  }) => ({
    subject: 'New Registration - FluencyArc',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Registration</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #013d45; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #013d45; }
          .footer { background: #f0f0f0; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">FluencyArc</div>
            <h2>New Registration Received</h2>
          </div>
          <div class="content">
            <p>A new user has registered for FluencyArc. Here are their details:</p>
            
            <div class="field">
              <span class="label">Name:</span> ${data.name}
            </div>
            
            <div class="field">
              <span class="label">Email:</span> ${data.email}
            </div>
            
            <div class="field">
              <span class="label">Phone:</span> ${data.phone}
            </div>
            
            <div class="field">
              <span class="label">English Level:</span> ${data.level}
            </div>
            
            <p style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-left: 4px solid #28a745;">
              <strong>Action Required:</strong> Someone from our team should contact this user within 24 hours.
            </p>
          </div>
          <div class="footer">
            <p>This email was sent from the FluencyArc registration system.</p>
            <p style="font-size: 12px; color: #666;">© 2024 FluencyArc. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  confirmation: (data: { name: string; email: string }) => ({
    subject: 'Registration Confirmed - FluencyArc',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmed</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #013d45; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .footer { background: #f0f0f0; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .cta { background: #013d45; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">FluencyArc</div>
            <h2>Registration Confirmed!</h2>
          </div>
          <div class="content">
            <p>Dear ${data.name},</p>
            <p>Thank you for registering with FluencyArc! We're excited to help you on your English learning journey.</p>
            
            <h3>What happens next?</h3>
            <ul>
              <li>Our team will review your registration</li>
              <li>You'll receive a call within 24 hours</li>
              <li>We'll assess your English level and goals</li>
              <li>Personalized learning plan will be created</li>
            </ul>
            
            <p style="text-align: center;">
              <a href="tel:+1234567890" class="cta">Call Us Now</a>
            </p>
            
            <p>If you have any questions, feel free to reply to this email.</p>
          </div>
          <div class="footer">
            <p>This email was sent to ${data.email}</p>
            <p style="font-size: 12px; color: #666;">© 2024 FluencyArc. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  })
};
