const authRouter = require('express').Router();
const auth = require('./auth');

authRouter.post('/login', auth.login);

authRouter.post('/signup', auth.signup);

module.exports = authRouter;