const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');
const { route } = require('./users');



console.log("Router Loaded");

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts',require('./post'));
router.use('/users',require('./users'))

//for any further routes access from here
//router.use('./routerName', require('./routerFile'))

module.exports = router;