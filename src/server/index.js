require('env2')('config.env');
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controllers/routes');

require('./middlewares/appMiddleware')(app, express);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});
app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
