const express = require("express");
const app = express();

app.get('/', (req, res) => {
	res.send('this is home');
});

app.get('/posts', (req, res) => {
	res.send('this is posts');
});

app.listen(3000);
