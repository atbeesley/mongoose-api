const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())


const postsRoute = require('./routes/posts');

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
