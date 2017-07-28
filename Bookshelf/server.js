const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = 'postgres://postgres:Romania7@localhost/bookshelfDB'
const booksdb_controller = require('./js/controllers/booksdb_controller.js');

const app = module.exports = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( connectionString ).then( dbInstance => app.set('db', dbInstance) );

app.post( '/api/book', booksdb_controller.create );
app.get( '/api/books', booksdb_controller.getAll );
app.get( '/api/book/:id', booksdb_controller.getOne );
app.put( '/api/book/:id', booksdb_controller.update );
app.delete( '/api/book/:id', booksdb_controller.delete );


const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );