const express = require('express');

require('dotenv').config();
require('./db/connect')();
const user = require('./routing/user.route');

const app = express();

app.use(express.json());
app.use('/api/v1', user);

app.listen(9000, () => console.log('Server ready on 9000'));
