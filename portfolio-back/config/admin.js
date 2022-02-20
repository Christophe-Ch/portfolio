module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '62a3a77c3e3b6d23a870b7610f94f2e5'),
  },
});
