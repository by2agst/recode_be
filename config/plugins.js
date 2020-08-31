module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'smtp.gmail.com'),
      port: env('SMTP_PORT', 587),
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD')
      }
    },
    settings: {
      defaultFrom: env('EMAIL_FROM'),
      defaultReplyTo: env('EMAIL_REPLY_TO')
    }
  }
})