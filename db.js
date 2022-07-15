const { MongoClient } = require("mongodb");
let database;
const url = `mongodb+srv://mostafa:test123@thobdb.8uowv.mongodb.net/?retryWrites=true&w=majority`;
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(url)
      .then((client) => {
        database = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => database,
};
