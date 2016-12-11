
import express from 'express';
import path from 'path';
import routes from './routes';

const port = process.env.PORT || 8080;
const app = express();

app.use('/states', routes);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(port, () => {
 console.log('listening on port ' + port);
})
