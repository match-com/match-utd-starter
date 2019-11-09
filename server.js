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


app.post('/api/postendpoint', function (req, res) {
  console.log('the body', req.body);
  let failed = false;
  if (failed) {
    res.status(500).end();
  } else {
    res.end();
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));


/* sample curl for the post
curl -X POST
  http://localhost:5000/api/postendpoint
  -H 'Content - Length: 13' \
  -H 'Content - Type: application / json' \
  -H 'Host: localhost: 5000' \
  -d '{ "test": 1 } '
*/