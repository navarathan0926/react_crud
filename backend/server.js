const express  = require("express");
const cors = require("cors");
const mysql = require("mysql");



const app = express();

app.use(express.json());
app.use(cors());



// module.exports = function(app) {
//     app.use(proxy('/proxypath', { target: '<target path>' }));
// };

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});


app.get("/", (req, res) =>{
    const sql = "SELECT * FROM student"; 
    db.query(sql,(err, data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })   
});

app.post("/create", (req, res)=>{
    const sql ="INSERT INTO student (`Firstname`,`Lastname`, `Email`) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
    ]
    db.query(sql, [values], (err, data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put("/update/:id", (req, res)=>{
    const sql ="UPDATE student set Firstname = ? Email = ? WHERE ID = ?";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(5000, () => {
    console.log("listening at port 5000");
})