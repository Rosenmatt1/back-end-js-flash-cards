const express = require('express')
const app = express()
const port = 3001

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const cors = require('cors')
const parser = require('body-parser')

app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
  knex('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/flashcards', (req, res) => {
  knex('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.post('/flashcards', (req, res, next) => {
  // console.log(req.body)
  knex('methods').insert(req.body).returning('*')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.put('/flashcards/:id', (req, res, next) => {
  console.log("req body", req.body)

  knex('methods').update(req.body).where('id', req.params.id).returning('*')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

// app.delete('/flashcards/:id', (req, res, next) => {
//   console.log("req body", req.body)
//   knex('methods').del(req.body).where('id', req.params.id).returning('*')
//     .then((rows) => {
//       res.send(rows);
//     })
//     .catch((err) => {
//       next(err);
//     });
// })





// app.get('/:tag', (req, res, next) => {
//   const tag = req.params.tag
//   if (data.tags.includes(tag)) {
//     const matching = data.songs.filter(song => song.tags.includes(tag))
//     res.status(200).send(matching)
//   } else {
//     res.status(404).send('No match to your tag')
//   }
// })

// app.get("/jokes/:tag", (req, res, next) => {
//   const tag = req.params.tag
//   const matching = data.jokes.filter(joke => joke.categories.includes(tag))
//   data.tags.includes(tag)
//     ? res.status(200).send(matching)
//     : res.status(404).send("Told you not to mess with the Chuck")
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))