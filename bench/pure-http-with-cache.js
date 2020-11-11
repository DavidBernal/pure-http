/* eslint-disable */
const pureHttp = require('..');
const { one, two } = require('./middlewares');

const app = pureHttp({
  cache: pureHttp.Cache({ maxAge: 60 }),
});

app.use(one, two);

app.get('/', (req, res) => res.send('Hello'));

app.get('/user/:id', (req, res) => {
  res.end(`User: ${req.params.id}`);
});

app.listen(3000);