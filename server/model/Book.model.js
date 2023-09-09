const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
	title: String,
	author: String,
	category: String,
	coverImg: String,
	description: String,
	rating: Number,
});

const BookModel = mongoose.model("book", bookSchema);

module.exports = BookModel;
