const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  http= require('http');

var app = express();
app.use(cors({ origin: "*" }));
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ limit: "60mb", extended: true }));
app.use(bodyParser.json({ limit: "60mb", extended: true }));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data');

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use('/api', require('./modules/router')(express));
var port = process.env.PORT || 3001;

http.createServer(app).listen(port, () => {
    console.log(`http server started at port App ${port}`)
})