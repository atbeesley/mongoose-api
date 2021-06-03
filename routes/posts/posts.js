const express = require('express');
const router = express.Router();
const post = require('../../models/Post');

router.get('/', (req, res) => {
	res.send('this is posts');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;