var path = require('path');

var protocol = process.env.SITE_PROTOCOL || 'http';
var port = process.env.SITE_PORT || process.env.PORT || 4000;

module.exports = {

  protocol: protocol,
  port: port,
  host: protocol + '://' + (process.env.SITE_HOSTNAME || ('0.0.0.0:' + port)),

  webConcurrency: process.env.WEB_CONCURRENCY || require('os').cpus().length,

  apiPrefix: process.env.SURFACE_OWL_API_PREFIX || '', apiVersion: process.env.SURFACE_OWL_API_VERSION || '', logLevel: process.env.SITE_LOG_LEVEL || 'debug', // winston logging level

  clientAppPath: process.env.SITE_CLIENT_PATH || path.resolve(__dirname, '../../../client/dist/'),
  uploadPath: path.resolve(__dirname, '../../../../upload'),

  jwt: {
    secret: process.env.SITE_JWT_SECRET || 'SITEToken',
    expiresIn: 24 * 60 * 60, // 24 hours in seconds
    cookieName: process.env.SITE_JWT_COOKIE_NAME || 'yc_sss'
  }
};
