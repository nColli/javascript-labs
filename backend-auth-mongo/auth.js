const User = require("./user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function login(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  const passwordCorrect = user
    ? false
    : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(
    userForToken, 
    process.env.SECRET,
    { expiresIn: 60*60 } // 1 hour
  );

  const response = {
    token,
    username: user.username
  }

  res.status(200).send(response)
}

async function signup(req, res) {
  const { username, password } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    passwordHash
  });

  const savedUser = await user.save();

  res.status(200).json(savedUser);
}

function getToken(req) {
  const auth = req.get('Authorization');
  if (auth && auth.startsWith('Bearer ')) {
    return auth.replace('Bearer ', '');
  }
  return null;
}

//middleware validar token y guardar usuario en req.user
function tokenValidation(req, res, next) {
  const token = getToken(req);

  if (!token) {
    return res.status(401).json({ error: 'token invalid' });
  }

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken.id) {
    return res.status(401).json({ error: 'token invalid' });
  }

  next();
}

module.exports = {
  login,
  signup,
  tokenValidation
}