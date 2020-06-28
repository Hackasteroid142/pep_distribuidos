const express = require('express');
const routes = require('./routes');

const app = express();

app.set("port", process.env.EXPRESSPORT || 3000);

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

routes(app);


app.listen(process.env.EXPRESSPORT, ()=>{
    console.log(`Listening on ${process.env.EXPRESSPORT}, and on postgres port ${process.env.PGPORT} at ${process.env.PGHOST}`)
});
