import express from 'express';
import { playerDecision } from './player-decision.js'
const app = express();

let counter = 0

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/', async (req, res) => {
    counter++
  console.log('Received from 3000:', req.body);
  setTimeout(() => {
    res.send(playerDecision());
  }, 1000)

});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
