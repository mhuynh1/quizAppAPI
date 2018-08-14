const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongo = require('./mongodb');

// initialize development environment things
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, PATCH");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
// set our port
const port = process.env.PORT || 8080;


// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(
    express.urlencoded({
        extended: true
    }))


const router = require("./routes");
// register routes
app.use(router);

const mongoUrl = "mongodb://localhost:27017/quizzes"

// start mongo connection pool, then start express app
mongo
    .connect(mongoUrl)
    .then(() => app.listen(port))
    .then(() => console.log(`a pea eye is LIT on ${port}`))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
