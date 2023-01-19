module.exports = ({ env }) => ({
  // ...
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
  // ...
  email: {
    provider: env('EMAIL_PROVIDER'),
    providerOptions: {
      host: env('SMTP_HOST', 'smtp-relay.sendinblue.com'),
      port: env('SMTP_PORT', 587),
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: env('houssin.carnelian@gmail.com'),
      defaultReplyTo: env('houssin.carnelian@gmail.com'),
    },
  },

});