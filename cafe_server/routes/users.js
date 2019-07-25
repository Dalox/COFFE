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
  data.push(req.query.email, req.query.password, req.query.fistname, req.query.lastname)
  console.log(req.query, data)
  const sql = 'INSERT INTO `users`(`email`, `password`, `nombre`, `apellido`) VALUES (?,?,?,?)'
  mc.query(sql,data,(err) => {
    if(err) {
      console.error(err)
    }else{
      console.log(req.query)
      res.json(req.query)
    }
  })
});

module.exports = router;
