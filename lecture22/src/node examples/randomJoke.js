const http = require('http');

const jokes = [
  { joke: "Why don't scientists trust atoms? Because they make up everything!" },
  { joke: "Why did the tomato turn red? Because it saw the salad dressing!" },
  { joke: "Why don't oysters give to charity? Because they're shellfish!" },
  { joke: "Why don't ants get sick? Because they have tiny ant-bodies!" },
];

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // allow request from file
  res.setHeader('Access-Control-Allow-Origin', '*');
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.end(JSON.stringify(randomJoke));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});