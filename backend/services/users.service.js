const { ObjectId } = require("mongodb");
const run = require("../utils/mongo");

class DBmongo {
  constructor(database, collection) {
    this.database = database;
    this.collection = collection;
  }

  get = async (userId, filter) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.find(filter).toArray();

    const updatedItems = resp.map((item) => {
      // Check if 'inCart' exists and if it includes userId
      const isInCart = item.inCart?.includes(userId) || false;
      item.inCart = isInCart;
      return item;
    });

    
    return resp;
  };

  helper = async (userId, filter) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.find(filter).toArray();
    const fe = { isSold: { $exists: true } };

    // Update documents matching the filter to set 'inCart' as an empty array
    await cols.updateMany(fe, { $set: { isSold: false } });
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

  
  addNewTransaction = async (userId, imageIds) => {
    const cols = await run(this.database, this.collection);
  
    for (const imageId of imageIds) {
      const transactionDocument = {
        userId: userId,
        imageId: imageId,
        createdAt: new Date(),
      };
  
      const result = await cols.insertOne(transactionDocument);
    }
  };
  

  updateUserImagesService = async (userId, imageIds) => {
    const cols = await run(this.database, this.collection);


    // Ensure imageIds is an array
    if (!Array.isArray(imageIds)) {
      throw new Error("imageIds must be an array");
    }

    const updatePromises = [];

    for (const imageId of imageIds) {
      const resp = await cols.updateOne(
        { _id: new ObjectId(userId) },
        {
          $addToSet: { imagesOwned: imageId },
        }
      );

      updatePromises.push(resp);
    }

    // Wait for all updates to complete
    await Promise.all(updatePromises);

    const cleanCart = await this.makeCartEmpty(userId)

    return "All images added to imagesOwned successfully"; // You can return any desired response here
  };

  emptyImages = async(userId, imageIds) => {

    for (const imageId of imageIds) {
      const cleanCart = await this.makeImagesEmpty(userId, imageId);
      const isSold = await this.isSold(imageId)
    }

  }

  makeImagesEmpty = async (userId, imageId) => {
    const cols = await run(this.database, this.collection);
  
    // Use $pull to remove the specified imageId from the inCart array
    const resp = await cols.updateOne(
      { _id: new ObjectId(imageId) },
      {
        $pull: { inCart: userId },
      }
    );
  
    return resp;
  };

  isSold = async (imageId) => {

    const cols = await run(this.database, this.collection);

    const resp = await cols.updateOne(
      { _id: new ObjectId(imageId) },
      {
        $set: { isSold: true }, // Use $set to update the isSold field to true
      }
    );

    return resp;
  };

  makeCartEmpty = async (userId) => {
    
    const cols = await run(this.database, this.collection);

    // Use $set to set the inCart field to an empty array
    const resp = await cols.updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: { inCart: [] },
      }
    );

    return resp;
  };

  updateUserCartService = async (userId, imageId) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(userId) });
    const resp = await cols.updateOne(
      { _id: new ObjectId(userId) },
      {
        $push: { inCart: imageId },
      }
    );
    return resp;
  };

  updateImageCartService = async (userId, imageId) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(imageId) });
    const resp = await cols.updateOne(
      { _id: new ObjectId(imageId) },
      {
        $push: { inCart: userId },
      }
    );
    return resp;
  };

  removeUserCartService = async (userId, imageId) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(userId) });
    const resp = await cols.updateOne(
      { _id: new ObjectId(userId) },
      {
        $pull: { inCart: imageId },
      }
    );

    return resp;
  };

  removeImageCartService = async (userId, imageId) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(imageId) });
    const resp = await cols.updateOne(
      { _id: new ObjectId(imageId) },
      {
        $pull: { inCart: userId },
      }
    );

    return resp;
  };

  updateImageService = async (userId, user) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(userId) });
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
