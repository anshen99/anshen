// project dependencies
import authenticate from './authenticate';
const { SERVER_PORT } = process.env;

// app listening 
authenticate.listen(SERVER_PORT, () => {
  console.info(`App running on port ${SERVER_PORT}`);
});