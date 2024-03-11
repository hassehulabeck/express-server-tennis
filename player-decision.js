import {strokes} from './tennis-strokes.js'

export const playerDecision = async () => {

    const stroke = strokes[Math.floor(Math.random() * strokes.length)]
      
    // Send a POST request to server on port 4000
    const response = await fetch('http://localhost:4000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stroke: `${ stroke }`}),
    });
    const data = await response.json();
    return data
  }
  
  