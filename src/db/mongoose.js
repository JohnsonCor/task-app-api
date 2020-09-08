// F:/corey/webdev/mongodb/bin/mongod.exe --dbpath=/corey/webdev/mongodb-data
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
