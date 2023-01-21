module.exports = ({ env }) => ({

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('EMAIL_SMTP_HOST'),
      port: env('EMAIL_SMTP_PORT'),
      auth: {
        user: env('EMAIL_SMTP_USER'),
        pass: env('EMAIL_SMTP_PASS'),
      },
      settings: {
        defaultFrom: 'houssin.carnelian@gmail.com',
        defaultReplyTo: 'houssin.carnelian@gmail.com',
      },
    },
  },


  // ...
});