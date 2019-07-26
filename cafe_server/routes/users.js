var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const mc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coffe'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  let data = []
  data.push(req.body.id, req.body.email, req.body.password, req.body.firstname, req.body.lastname)
  console.log(req.body, data)
  const sql = 'INSERT INTO `users`(`id`, `email`, `password`, `nombre`, `apellido`) VALUES (?,?,?,?,?)'
  mc.query(sql,data,(err) => {
    if(err) {
      res.json({status: false})
    }else{
      res.json({status: true})
    }
  })
});

router.post('/signin', function(req, res, next) {
  let data = []
  data.push(req.body.email)
  console.log(req.body, data)
  const sql = ' SELECT * FROM `users` WHERE email = ? '
  mc.query(sql,req.body.email,(err, rows) => {
    if(err) {
      console.error(err)
      res.json({status: 'error'})
    }else{
      if(req.body.password == rows[0].password){
        console.log(rows)
        res.json(rows)
      }else{
        res.json({status: 'password'})
      }
    }
  })
});


module.exports = router;
