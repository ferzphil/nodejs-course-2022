const { default: mongoose } = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb://0.0.0.0:27017/nodejs_course");
}

module.exports = connectDB;


// const { MongoClient } = require("mongodb");

// const url = "mongodb://0.0.0.0:27017";

// const client = new MongoClient(url);

// const dbName = "nodejs_course";

// async function connect() {
//     await client.connect();
//     const db = await client.db(dbName);
//     return db;
// }

// module.exports = connect;