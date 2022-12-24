// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');
const clientRoutes = require('./clientRoutes');

module.exports = {
  userRoutes,
  adminRoutes,
  clientRoutes
};
