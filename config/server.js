module.exports = ({ env }) => ({
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET')
    }
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://localhost:8888')
})
