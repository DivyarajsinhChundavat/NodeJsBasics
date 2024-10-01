const mongoose = require("mongoose");

//connection with mongo

async function connectMongoDb(url) {
    return mongoose.connect(url);
}

module.exports = { connectMongoDb, };