const express = require("express");
const conn = require("../src/db/conn");
const MensRanking = require('../src/models/mens');
const router = require("./routers/men");
const cors=require('cors');
const bodyParser=require('body-parser');
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`Connection is live on port no. ${port}`);
})