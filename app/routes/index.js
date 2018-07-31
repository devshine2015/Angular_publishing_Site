module.exports = function (app) {
  app.use('/api/v1/user', require('../controllers/user.controller'));
  app.use('/api/v1/article', require('../controllers/article.controller'));
  app.use('/api/v1/location', require('../controllers/location.controller'));
};
