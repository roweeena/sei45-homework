// list requirements
const express = require ('express');
const ejs = require ('ejs');
const axios = require('axios');
const books = require('google-books-search');

//basic setup
const server = express();
server.set('view-engine',ejs);
const PORT = 3000;

//view files
server.get('/', (req, res) => {
  res.render('home.ejs')
})

server.get('/results', (req, res) => {
  books.search(req.query.book, function(error, results) {

    if ( ! error ) {
        res.render('results.ejs', {
          cover: results[0]["thumbnail"],
          title: results[0]["title"],
          authors: results[0]["authors"]
        })
    } else {
        console.log(error);
    }
});

})
//listening to run PORT
server.listen(PORT, () => console.log(`Opening on http://localhost:${PORT}`))
