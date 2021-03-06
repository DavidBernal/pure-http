const bodyParser = require('body-parser');
const pureHttp = require('..');
const router = require('./router');

const app = pureHttp({
  cache: pureHttp.Cache({ maxAge: 60000 }),
});

app.use([bodyParser.json(), bodyParser.urlencoded({ extended: true })]);

app.get('/', (req, res) => {
  res.send('GET');
});

app.post('/', (req, res) => {
  res.send('POST');
});

app.use('/', router);

module.exports = app;
