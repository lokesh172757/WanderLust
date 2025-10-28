const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main().then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
});
const initDb = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "689ed2890daefcf742d08012" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDb();