
import express from 'express';
import path from 'path';
import routes from './routes';

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'dev';
const app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/states', routes);

app.get('/sah', (req, res) => {
  res.send('sah!?');
})

if (env !== 'test'){
  app.listen(port, () => {
   console.log('listening on port ' + port);
  })
} else {
  module.exports = app;
}
