const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// GET today date
app.get("/api", (req, res)=>{
  const date = new Date();
  const utc = date.toUTCString()
  const unix = date.getTime()
  res.status(200).json({unix: unix , utc: utc});
})
// GET date by date and unix
app.get("/api/:date?",(req, res) => {
  const userDate = req.params.date;
  const date = isNaN(userDate) ? new Date(userDate) : new Date(parseInt(userDate));
  const unix = date.getTime();
  const utc = date.toUTCString();

  if(utc != "Invalid Date"){
    res.status(200).json({unix: unix , utc: utc});
    return
  }
  res.status(400).json({error: "Invalid Date"});
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
