const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = () => {
  mongoose
    .connect("mongodb+srv://gauravkumar91627018:u13HYof4cdREfbpt@cluster0.yw2rd0s.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected succcessfully");
    })
    .catch((error) => {
      console.log(`Error while connecting server with Database`);
      console.log(error);
      process.exit(1);
    });
};
