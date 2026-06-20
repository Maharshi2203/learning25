const mongoose = require("mongoose");

const dbConnection = () => {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/node_weekend_2_2026";

  return mongoose.connect(mongoUri);
};

module.exports = dbConnection;
