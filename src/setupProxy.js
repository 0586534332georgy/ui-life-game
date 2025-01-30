const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://server-life-game.onrender.com:443',
      changeOrigin: true,
    })
  );
};
