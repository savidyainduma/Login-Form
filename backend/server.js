const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
    console.log("Received data from client:", req.body);
   // const sql = "INSERT INTO login (name, email, password, mobile, city) VALUES (?, ?, ?, ?, ?)";

    const sql = `INSERT INTO login (name, email, password, mobile, city) VALUES ('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.mobile}','${req.body.city}')`
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.mobile,
        req.body.city
    ]

 
    //console.log("Values array:", values);
    // db.query(sql, [values], (err, data) => {
      //   if(err) {
     //        return res.json("Error");
     //  }
     //   return res.json(data);
    // })

    db.query(sql,(err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })

})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email,  req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Failed");
        }
    })
})

app.get('/home', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, data) => {
        if(err){ return res.json(err)
            return res.status(500).json({ error: "Error occurred during fetching data from the database" });
        }
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listning");
})