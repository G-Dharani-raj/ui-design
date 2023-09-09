const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	completed: [mongoose.Schema.Types.ObjectId],
	bookmarked: [mongoose.Schema.Types.ObjectId],
	isAdmin: { type: Boolean, default: false },
});

const UserModel = mongoose.Model("user", userSchema);

module.exports = UserModel;
