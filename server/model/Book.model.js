const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
	title: String,
	author: String,
	category: String,
	coverImg: String,
	description: String,
	rating: Number,
	count: Number,
	totalRating: Number,
	isbn: { type: Number, required: true, maxLength: 13, unique: true },
});

const BookModel = mongoose.model("book", bookSchema);

module.exports = BookModel;
