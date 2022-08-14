// Importing modules
import express from 'express';
import routes from './routes/index2';

// Creating application object
const app = express();

// Seting the port
const port = 3000;

// Using the router
app.use('/api', routes);

// Listening to a port
app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
