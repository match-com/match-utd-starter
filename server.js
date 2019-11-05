import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
