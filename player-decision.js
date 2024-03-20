import { strokes } from "./tennis-strokes.js";

export const playerDecision = async (opponent) => {
  const stroke = strokes[Math.floor(Math.random() * strokes.length)];

  // Send a POST request to server on port 4000
  const response = await fetch(`http://localhost:${opponent}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stroke: `${stroke}` }),
  });
  const data = await response.json();
  return data;
};

// Serve the server on 4000 :)
export const startServe = async (opponent) => {
  const serve = "Serve";

  const response = await fetch(`http://localhost:${opponent}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stroke: `${serve}` }),
  });
  const data = await response.json();
  return data;
};
