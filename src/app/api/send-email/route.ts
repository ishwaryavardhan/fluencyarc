import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, emailTemplates, EmailOptions, getDefaultFromEmail, getDefaultToEmail } from '@/lib/emailConfig';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, from, subject, html, type, data } = body;

    // Use default emails if not provided
    const defaultTo = getDefaultToEmail();
    const defaultFrom = getDefaultFromEmail();

    // Validate required fields
    if (!defaultTo || !defaultFrom) {
      return NextResponse.json(
        { error: 'Email configuration missing' },
        { status: 500 }
      );
    }

    let emailOptions: EmailOptions;

    // Use template if type is provided
    if (type && emailTemplates[type as keyof typeof emailTemplates] && data) {
      const template = emailTemplates[type as keyof typeof emailTemplates](data);
      emailOptions = {
        to: to || defaultTo,
        from: from || defaultFrom,
        subject: template.subject,
        html: template.html
      };
    } else {
      // Use custom HTML if provided
      if (!subject || !html) {
        return NextResponse.json(
          { error: 'Missing required fields: subject, html' },
          { status: 400 }
        );
      }
      
      emailOptions = {
        to: to || defaultTo,
        from: from || defaultFrom,
        subject,
        html
      };
    }

    // Send email
    await sendEmail(emailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        provider: 'gmail',
        sentTo: emailOptions.to,
        sentFrom: emailOptions.from
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More specific error handling
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Mail server connection failed. Please check email configuration.';
      } else if (error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Mail server timeout. Please try again.';
      } else if (error.message.includes('EAUTH')) {
        errorMessage = 'Email authentication failed. Please check credentials.';
      } else if (error.message.includes('535')) {
        errorMessage = 'Gmail authentication failed. Please use App Password, not regular password.';
      }
    }

    return NextResponse.json(
      { 
        error: errorMessage, 
        details: error instanceof Error ? error.message : 'Unknown error',
        provider: 'gmail'
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { 
      error: 'Method not allowed',
      availableMethods: ['POST'],
      endpoint: '/api/send-email',
      provider: 'gmail'
    },
    { status: 405 }
  );
}
