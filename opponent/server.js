import express from 'express';
import { playerDecision } from './../player-decision.js'
const app = express();
const port = 4000
const opponent = 3000

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
