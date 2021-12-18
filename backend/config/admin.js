module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cdbaf99bf1fafe35da2ec339f972154f'),
  },
});
