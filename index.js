var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date?",(req, res) => {
  const userDate = req.params.date;
  const date = new Date(userDate)

  const unix = date.valueOf();
  const year = date.getUTCFullYear();
  const month = date.getMonth();
  const day = date.getUTCDate();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();
  
  const utc = new Date(Date.UTC(year, month, day, hours, seconds, miliseconds)).toUTCString();

  res.status(200).json({unix: unix , utc: utc});


});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
