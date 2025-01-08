const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongooseURL = "mongodb://127.0.0.1:27017/wanderlust"

main().then(()=>{
    console.log("Database connnect successfully");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongooseURL);
}

const initDb = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,owner:"6773b355664c9ce4610bd12c",
    }))
    await Listing.insertMany(initData.data);
    console.log("data was uploaded successfully");
}

initDb();