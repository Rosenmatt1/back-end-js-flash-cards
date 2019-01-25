const express = require('express')
const app = express()
const port = 3001

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const cors = require('cors')
app.use(cors())

// const sql = knex('methods').toString();
// console.log(sql);
// knex.destroy();

app.get('/', (req, res) => {
  // knex('methods')
  knex('*').from('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))