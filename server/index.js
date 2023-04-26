import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mysql from 'mysql';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pos_restaurant"
});

app.listen(port, () => {
  console.log("Server is tunning on ",port)
})

app.get("/", (req, res) => {
  res.send("Hello admin")
})

app.get("/categories", (req, res) => {
  db.query("select * from categories", (err, result)=>{
    if( err ){
      console.log(err)
    } res.send(result)
  })
})
