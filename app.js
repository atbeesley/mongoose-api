const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts/posts');

app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
	res.send('this is home');
});

mongoose.connect(
process.env.DB_CONNECTION,
{ 
	useNewUrlParser: true,
	useUnifiedTopology: true 
}, 
	() => console.log(" Mongoose is connected")
);

app.listen(3000);
