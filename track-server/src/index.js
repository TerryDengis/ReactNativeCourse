require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRouter = require('./routes/authRoutes');
const trackRouter = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRouter);

const mongoUri =
  'mongodb+srv://terry123:kuktiw-xoCpo3-bohhaz@contactkeeper-5nfbd.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.log('Could not connect to Mongo instance ', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
