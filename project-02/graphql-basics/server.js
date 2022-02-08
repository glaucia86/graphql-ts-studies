/**
 * file: index.js
 * description: file responsible to execute the application.
 * date: 02/04/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { port } from './src/config/environment/index';
import app from './src/app';

app.listen(port, () => {
  console.log('GraphQL Server is running at port:', port);
});

