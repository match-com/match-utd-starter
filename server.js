import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

let callCount = 0;

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  callCount++;
  res.send({ value: callCount });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
