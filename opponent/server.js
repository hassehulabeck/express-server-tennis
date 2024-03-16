import express from 'express';
import { playerDecision } from './../player-decision.js'
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PLAYER2_PORT
const opponent = process.env.PLAYER1_PORT

let counter = 0

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/', async (req, res) => {
    counter++
  console.log('Received from 3000:', req.body);
  setTimeout(() => {
    res.send(playerDecision(opponent));
  }, 1000)

});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
