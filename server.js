import express from 'express'
import fetch from 'node-fetch';
import { playerDecision } from './player-decision.js';

const app = express()
const port = 3000

app.use(express.json())

let requestCounter = 0; // Counter to track the number of requests made


app.get('/', async (req, res) => {
  if (requestCounter < 10) {
    requestCounter++;
    console.log(`Making request #${requestCounter} to server on port 4000`);
    setTimeout(() => {
      res.send(playerDecision());
    }, 1000)
  } else {
    res.send({ message: "Reached maximum request limit of 10" });
  }
});

app.post('/', async (req, res) => {
  if (requestCounter < 10) {
    requestCounter++;
    console.log('Received from 4000:', req.body);
    setTimeout(() => {
      res.send(playerDecision());
    }, 1000)
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



