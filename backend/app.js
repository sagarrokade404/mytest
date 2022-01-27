const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  http= require('http'),
  path = require('path'),
  swaggerUI = require('swagger-ui-express'),
  swaggerJsDoc = require('swagger-jsdoc');

var app = express();
app.use(cors({ origin: "*" }));
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ limit: "60mb", extended: true }));
app.use(bodyParser.json({ limit: "60mb", extended: true }));

console.log('path', path.join(__dirname, 'public/build'));

// app.use(express.static(path.join(__dirname, 'public/build')));

const swaggerDocument = require('./utilitys/swagger.json');

const swaggerOptions = {
    swaggerDefinition : {
        info: {
            title: 'USER API',
            description: ' USER API notificaton ',
            contact: {
                name: 'USER DATA'
            },
            servers: ["http://localhost:3001"]
        }
    },
    apis: ['app.js']
};


const swagerOptions= swaggerJsDoc(swaggerOptions);

var app = express()
// https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v2.0/json/petstore-expanded.json
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swagerOptions))
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

// deploy front end
const root = require('path').join(__dirname, 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})


var port = process.env.PORT || 3001;

http.createServer(app).listen(port, () => {
    console.log(`http server started at port App ${port}`)
})