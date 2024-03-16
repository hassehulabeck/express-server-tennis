import express from 'express'
import fetch from 'node-fetch';
import { playerDecision } from './player-decision.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const port = process.env.PLAYER1_PORT
const opponent = process.env.PLAYER2_PORT

app.use(express.json())

let requestCounter = 0; // Counter to track the number of requests made


app.get('/', async (req, res) => {
  if (requestCounter < 10) {
    requestCounter++;
    console.log(`Making request #${requestCounter} to server on port 4000`);
    setTimeout(() => {
      res.send(playerDecision(opponent));
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
      res.send(playerDecision(opponent));
    }, 1000)
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



