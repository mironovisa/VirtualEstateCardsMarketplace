const { ObjectId } = require("mongodb");
const run = require("../utils/mongo");

class DBmongo {
  constructor(database, collection) {
    this.database = database;
    this.collection = collection;
  }

  get = async (filter) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.find(filter).toArray();
    return resp;
  };


  getById = async (userId) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.findOne({ _id: new ObjectId(userId) });
    return resp;
  };

  findUserByEmailService = async (email) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.findOne({ email: email });
    return resp;
  };

  addNewUserService = async (user, hash) => {
    user.password = hash;

    const cols = await run(this.database, this.collection);
    const resp = await cols.insertOne(user);
    return resp;
  };

  addNewImageService = async (user) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.insertOne(user);
    return resp;
  };

  findCollectionLengthService = async () => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.countDocuments({});
    return resp;
  };

  updateUserService = async (userId, user) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(userId) });
    console.log(find, "finddd");
    const resp = await cols.updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: user,
      }
    );
    return resp;
  };

  getAllById = async (imageIds) => {
    const cols = await run(this.database, this.collection);
    // Convert each string ID to ObjectId
    const objectIdArray = imageIds.map((imageId) => new ObjectId(imageId));
    const resp = await cols.find({ _id: { $in: objectIdArray } }).toArray();
    return resp;
  };

  updateUserImagesService = async (userId, imageId) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(userId) });
    const resp = await cols.updateOne(
      { _id: new ObjectId(userId) },
      {
        $push: { imagesOwned: imageId },
      }
    );
    return resp;
  };

  updateImageService = async (userId, user) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(userId) });
    console.log(find, "finddd");
    const resp = await cols.updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: user,
      }
    );
    return resp;
  };

  deleteUserService = async (userId) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.deleteOne({ _id: new ObjectId(userId) });
    return resp;
  };

  deleteImageService = async (userId) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.deleteOne({ _id: new ObjectId(userId) });
    return resp;
  };
}

module.exports = DBmongo;
