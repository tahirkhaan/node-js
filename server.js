const express = require('express');
const User = require('./user');
const app = express();
app.get('/', (req, res) => {
  User.find({}, (err, data) => {
    //res.setHeader('Content-Type', 'application/json');
    if (err) return res.send(JSON.stringify({
      'err': 'No users found'
    }));
     
    res.json(data);
  })
});
app.get('/cars', (req, res) => {
  cars = [{
    name: 'Austin Martin',
  }, {
    name: 'Ferrari',
  }, {
    name: 'Bentley',
  }, {
    name: 'Alfa Romeo',
  }];
  res.send(JSON.stringify(cars));
});

app.listen(8090, function() {
  console.log('app listening on port 8090!')
})
