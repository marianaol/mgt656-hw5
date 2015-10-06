var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/exuberantllama', function(request, response){
    response.send('Hello MGT-656! Hola soy la llama!');
});

app.listen(
    process.env.PORT || 4000);