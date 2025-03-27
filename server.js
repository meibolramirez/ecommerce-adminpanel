import jsonServer from 'json-server';
import { readFileSync } from 'fs';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Add the X-Total-Count header dynamically based on the data in db.json
server.use((req, res, next) => {
  // Only for GET requests with pagination (_page and _limit query parameters)
  if (req.method === 'GET' && req.query._page) {
    // Read the current data from db.json
    const db = JSON.parse(readFileSync('db.json', 'utf8'));

    // Calculate the total count based on the requested resource
    const resource = req.path; // `products` or `users`
    const totalCount = db[resource].length; // Get the total number of items in the resource

    // Set the X-Total-Count header to the total count of items
    res.setHeader('X-Total-Count', totalCount);
  }
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});
