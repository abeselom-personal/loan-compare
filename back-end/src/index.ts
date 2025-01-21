import 'dotenv/config';

import http from 'http';

import server from './server';

const { PORT, NODE_ENV } = process.env;

const port = NODE_ENV === 'production' ? undefined : PORT;

http.createServer(server).listen(port, () => {
  console.log(`Server is listening on port ${port || 'default port'}`);
});
