const mongooose = require('mongoose');
const schema = mongoose.Schema;

const booksSchema = new schema({
	Title: String,
	Author: String,
	Edition: String,
	Summary: String,
})

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;