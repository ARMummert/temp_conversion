'use strict''
//Express
const express = require('express')
const app = express()
//PORT
const port = 8000

const fs = require('fs') //For creating, reading, and updating files

const { range } = require('express/lib/request');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}));

// Content Security Policy - install - npm i helmet
const helmet = require("helmet");

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    "block-all-mixed-content": false,
    "upgrade-insecure-requests": true,
    'script-src-attr': null,
    directives: {
      "default-src": [
          "'self'",
          "blob:", 
          "data:", 
          "gap:",
          
      ],
      "base-uri": "'self'",
      "font-src": [
          "'self'",
          "https:",
          "data:",
          "https://fonts.gstatic.com"
      ],
      "frame-ancestors": [
          "'self'"
      ],
      "img-src": [
          "'self'",
          "data:",
          "blob:",
          "https:",
          "http://127.0.0.1/favicon.ico",
          "'img'",
      ],
      "object-src": [
          "'none'"
      ],
      "form-action": [
        "'self'"
      ],
      "script-src": [
          "'self'",
          "data:",
          "https:",
          "'unsafe-inline'",
          "http://code.jquery.com/jquery-latest.min.js",
          "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"

      ],
      "style-src": [
          "'self'",
          "data:",
          "blob:",
          "https:",
          "'unsafe-inline'",
          "https://fonts.googleapis.com"
      ],
    },
  }),
  helmet.dnsPrefetchControl({
      allow: true
  }),
  helmet.frameguard({
      action: "deny"
  }),
  helmet.hidePoweredBy(),
  helmet.hsts({
      maxAge: 123456,
      includeSubDomains: false
  }),
  helmet.ieNoOpen(),
  helmet.noSniff(),
  helmet.referrerPolicy({
      policy: [ "origin", "unsafe-url" ]
  }),
  helmet.xssFilter()
);

// Routes

app.get("/", (req, res, next) => {
    res.render('temp_convert')
})
app.post("/temperature", (req,res) =>{
    const json = {
        input_unit : req.body.input_unit,
        select_temp : req.body.select_temp,
        conversion : req.body.conversion,
    };

    const value = JSON.stringify(json);

    const message = value;
    res.send(message); 
    fs.writeFile('temperature.txt', message, err => {
        if (err) {console.error(err)}
    });
    return false;
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});