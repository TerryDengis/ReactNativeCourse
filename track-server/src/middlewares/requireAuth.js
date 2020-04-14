const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'Your authorization was not recieved.' });
  }

  const token = authorization.replace('Bearer ', '');

  jwt.verify(token, 'MY_SECRET_KEY_jdhsgfakjhgeyg', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You are not logged in.' });
    }
    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
