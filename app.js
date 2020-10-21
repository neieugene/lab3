const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');


app.get('/', (req, res) => {
  fs.readFile('./index.html', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  res.send(data)
	});
});

app.get('/manifest.json', (req, res) => {
	fs.readFile('./manifest.json', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  res.send(data)
	});
})


// app.get('/', (req, res) => {
//   res.send(`<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>Hello World</title>
//   <link rel="stylesheet" href="css/style.css">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="manifest" href="/manifest.json">
//   <meta name="theme-color" content="white"/>
//   <style type="text/css">body {
//   font-family: sans-serif;
// }

// /* Make content area fill the entire browser window */
// html,
// .fullscreen {
//   display: flex;
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   width: 100%;
// }

// /* Center the content in the browser window */
// .container {
//   margin: auto;
//   text-align: center;
// }

// .title {
//   font-size: 3rem;
// }</style>
// <body class="fullscreen">

//   <div class="container">
//     <h1 class="title">Hello World!</h1>
//   </div>
//   <script src="js/main.js"></script>
// </body>
// </html>`)
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})