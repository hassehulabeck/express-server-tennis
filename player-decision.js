import { strokes } from "./tennis-strokes.js";

export const playerDecision = async (opponent, requestCounter) => {
  let stroke;
  requestCounter === 1
    ? (stroke = "Serve")
    : (stroke = strokes[Math.floor(Math.random() * strokes.length)]);

  // Send a POST request to server on port 4000
  const response = await fetch(`http://localhost:${opponent}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stroke: `${stroke}` }),
  });
  const data = await response.json();
  return data;
};
