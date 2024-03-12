# Express-server-tennis

An example of two express servers (on ports 3000 and 4000) that plays tennis. Incredible but true.

## How on earth?

When both servers are running, a `GET` request to port 3000 will trigger the first stroke (Volley, backhand, forehand or maybe a smash). The responding server will act upon this `POST` request and strike back, and so forth...

## Install

Start a terminal (for port 3000).

```bash
git clone https://github.com/hassehulabeck/express-server-tennis
cd express-server-tennis
npm install
nodemon server.js
```

Start another terminal (for port 4000).

```bash
cd opponent
npm install 
nodemon server.js
```

## Wanna help and develop?

Please do. There may be some open issues, and if not, please add one if you want to. You can read how in [CONTRIBUTING.md](./CONTRIBUTING.md)

