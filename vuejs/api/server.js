const express = require('express');
const port = 3000;
const router = require('./routes/controller');
const app = express();

app.use('/', router);
app.listen(port, function(){
    console.log(`Server Side Running On Port:` + port);
});
