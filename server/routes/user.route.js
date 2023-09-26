const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const UserModel = require("../model/User.model.js");
require("dotenv").config();
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
	let { email, name, password, isAdmin } = req.body;
	try {
		let check_user = await UserModel.find({ email });
		if (check_user.length > 0) {
			res.status(200).send({ message: "User already registered" });
		} else {
			bcrypt.hash(password, 5, async (err, hash) => {
				if (err) res.status(500).send({ message: err.message });
				let newUser = new UserModel({
					email,
					name,
					password: hash,
					isAdmin,
				});
				await newUser.save();
			});
			res.status(200).send({ message: "User registered successfully" });
		}
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

userRouter.post("/login", async (req, res) => {
	let { email, password } = req.body;
	try {
		let user = await UserModel.find({ email });
		if (user.length > 0) {
			let hash = user[0].password;
			bcrypt.compare(password, hash, (err, result) => {
				if (err) res.status(500).send({ message: err.message });
				else if (result) {
					let token = jwt.sign({ email }, process.env.JWT_SECRET);
					res.status(200).send({
						message: "User logged in successfully",
						token,
					});
				} else {
					res.status(401).send({ message: "Invalid credentials" });
				}
			});
		} else res.status(401).send({ message: "Invalid credentials" });
	} catch (error) {
		res.status(500).send({ message: error.message });
		QAZ;
	}
});

module.exports = userRouter;
