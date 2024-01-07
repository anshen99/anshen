// global dependencies
import * as dotenv from 'dotenv';
dotenv.config();  // initialise environment variables using a local .env file

// project dependencies
//import routes from './routes';

// set express app
import express from 'express';
const authenticate = express();

// middlewares
authenticate.use(express.json());

// routes
//authenticate.use(routes);

export default authenticate;
