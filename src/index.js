const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const { db } = require('./model/dbConnection');


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

//read all user
app.get('/api/read_all_user', (req, res) => {
    const sql_query = "SELECT * FROM user";

    db.query(sql_query, (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send(result);
            console.log(result);
        }
    })
})

//read user by email
app.get('/api/read_user/:user_email', (req, res) => {
    const user_email = req.params.user_email;
    const sql_query = "SELECT * FROM user WHERE email = ?";

    db.query(sql_query, user_email, (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send(result);
            console.log(result);
        }
    })
})

app.listen(3001, () => {
    console.log('Server berhasil dijalankan pada port 3001!')
})