//imports npm packages and the api routes
const router = require('express').Router();
const apiRoutes = require('./api');

//middlware 

//uses the api folder
router.use('/api', apiRoutes);

//uses the default response as the message in the res.send
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;