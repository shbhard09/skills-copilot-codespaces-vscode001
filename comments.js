// Create web server
// When client sends HTTP request, server returns HTTP response
// Client: browser
// Server: Node.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Path: /comments
// GET: return all comments
// POST: add a new comment
app.route('/comments')
	.get((req, res) => {
		fs.readFile('./data/comments.json', 'utf-8', (err, data) => {
			if (err) {
				res.status(500).send('Internal Server Error');
			} else {
				const comments = JSON.parse(data);
				res.send(comments);
			}
		});
	})
	.post(bodyParser.json(), (req, res) => {
		fs.readFile('./data/comments.json', 'utf-8', (err, data) => {
			if (err) {
				res.status(500).send('Internal Server Error');
			} else {
				const comments = JSON.parse(data);
				const newComment = {
					id: Date.now(),