const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost:32768/mongo-docker', {
  useMongoClient: true
});
var User = mongoose.model('User', {
  name: String,
  username: String
});
seedUsers = () => {
  for (let i = 0; i < 100; i++) {
    User({
      name: faker.name.findName(),
      username: faker.internet.email()
    }).save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('meow ' + i);
      }
    });
  }
}
module.exports = User;
