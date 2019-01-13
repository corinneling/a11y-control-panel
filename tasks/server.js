const colors = require('colors');
const express = require('express');
const open = require('opener');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`\n${colors.bgGreen(' - Server started - ').black}\n\nListening on localhost:${colors.green(PORT)}\n`);
});

open('http://localhost:4000/');