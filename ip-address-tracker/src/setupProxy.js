const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/apiIpify', {
      target: 'https://api.ipify.org',
      changeOrigin: true,
      pathRewrite: {
        "^/apiIpify": "",
      },
      headers: {
        "Connection": "keep-alive",
        "content-type": "application/json"
      },
    })
  );

  app.use(
    createProxyMiddleware('/apiGeoIpify', {
      target: 'https://geo.ipify.org/api/v2',
      changeOrigin: true,
      pathRewrite: {
        "^/apiGeoIpify": "",
      },
      headers: {
        "Connection": "keep-alive",
        "content-type": "application/json"
      },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.path += `&apiKey=${process.env.REACT_APP_GEO_API_KEY}`;
      }
    })
  );
}