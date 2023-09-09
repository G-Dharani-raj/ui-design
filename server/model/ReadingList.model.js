const mongoose = require("mongoose");

const rlSchema = mongoose.Schema({
	bookId: mongoose.Schema.Types.ObjectId,
	pgNo: Number,
	userId: mongoose.Schema.Types.ObjectId,
});

const RLModel = mongoose.Model("reading_list", rlSchema);

module.exports = RLModel;
