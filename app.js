const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')

const postsRoute = require('./routes/posts/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
	res.send('this is home');
});

try {
     mongoose.connect(
      process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }


app.listen(3000);
