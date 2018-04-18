'use strict';

const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
let app = express();
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.use(express.static('./public'));


app.get('/new', (request, response) => {
  response.sendFile('new.html', {root:'./public'});
})
app.post('/articles', bodyParser, function(request, response) {
});

  response.status(201).json(request.body);
  console.log(request.body);
  console.log('response', response.body);

  response.send('Record posted to server!!');
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  

})


});


app.use((request, response) => {
  response.status(404).send('Sorry, that route does not exist.');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});