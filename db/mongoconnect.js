const mongoose = require("mongoose");
const { config } = require("../config/secret");

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    `mongodb+srv://${config.userDb}:${config.passDb}@cluster0.jddu7ws.mongodb.net/tron`
  );
  console.log("mongo connect");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
