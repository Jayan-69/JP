export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'jayanmihisara8@gmail.com';

  if (!apiKey) {
    res.status(500).json({ error: 'Server is not configured for email sending' });
    return;
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio Contact Form', email: toEmail },
        to: [{ email: toEmail, name: 'Jayan Mihisara Perera' }],
        replyTo: { email, name },
        subject: `New message from ${name} via portfolio`,
        htmlContent: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        `,
      }),
    });

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.text();
      console.error('Brevo API error:', brevoResponse.status, errorBody);
      res.status(502).json({ error: 'Failed to send email' });
      return;
    }

    const autoReplyResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Jayan Mihisara Perera', email: toEmail },
        to: [{ email, name }],
        subject: `Thank you for reaching out, ${name}!`,
        htmlContent: `
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thank you for getting in touch through my portfolio website. I've received your message and truly appreciate you taking the time to reach out.</p>
          <p>I'll review your message and get back to you within <strong>24 hours</strong>.</p>
          <p>In the meantime, feel free to connect with me on
            <a href="https://www.linkedin.com/in/jayan-perera-1725a22b4/">LinkedIn</a> or
            <a href="https://github.com/Jayan-69">GitHub</a>.
          </p>
          <p>Best regards,<br/>Jayan Mihisara Perera<br/>Full Stack Developer</p>
        `,
      }),
    });

    if (!autoReplyResponse.ok) {
      const errorBody = await autoReplyResponse.text();
      console.error('Brevo auto-reply error:', autoReplyResponse.status, errorBody);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
