const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.set("port", process.env.EXPRESSPORT || 3000);

app.use(express.json());

app.use(cors());
  

routes(app);


app.listen(process.env.EXPRESSPORT, ()=>{
    console.log(`Listening on ${process.env.EXPRESSPORT}, and on postgres port ${process.env.PGPORT} at ${process.env.PGHOST}`)
});
