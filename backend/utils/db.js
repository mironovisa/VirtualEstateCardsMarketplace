const { ObjectId } = require("mongodb");
const run = require("../utils/mongo")

class DBmongo {
  constructor(database, collection) {
    this.database = database;
    this.collection = collection;
  }

  get = async () => {
    console.log('howsit working');
    const cols = await run(this.database, this.collection);
    console.log("here");
    const resp = await cols.find().toArray();
    console.log("here2");
    return resp;
  };

  getById = async (userId) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.findOne({ _id: new ObjectId(userId) });
    return resp;
  };
}

module.exports = DBmongo;
