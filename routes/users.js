var express = require('express');
var router = express.Router();
const co = require("co");
const UserService =  require("../services/UserService");

/* GET users listing. */
router.get('/', co.wrap(function*(req, res, next) {
    try {
        let users = yield UserService.fetchUsers();
        res.send(users);
    } catch (error) {
        console.log(error);
    }
}));

router.post('/', co.wrap(function*(req, res, next) {
    try {
        let user  = yield UserService.saveUser(req.body);
        res.send(user);
    } catch(error) {
        console.log(error);
        next(error);
    }
}));

module.exports = router;
