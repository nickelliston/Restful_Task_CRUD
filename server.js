const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static( __dirname + '/public/dist/public' ));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));