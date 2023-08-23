const DBmongo = require("../utils/db")

const users = new DBmongo("NFTMarketPlace", "users");

const findUserByEmailService = async () => {
    console.log('helllllo');

    const test = await users.get()
    console.log(test);

}

findUserByEmailService()