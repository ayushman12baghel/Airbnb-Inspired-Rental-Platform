// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

let categoryAll = [
	"Trending",
	"Rooms",
	"Iconic cities",
	"Mountains",
	"Castles",
	"Swimming Pools",
	"Camping",
	"Farms",
	"Arctic",
	"Domes",
	"Boat",
];

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    await initDB(); // Call to initialize the data
  } catch (err) {
    console.log("Error connecting to DB:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from DB");
  }
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"67125951e79c627843b2c577",
      price: obj.price * 25,
		category: [
			`${categoryAll[Math.floor(Math.random() * categoryAll.length)]}`,
			`${categoryAll[Math.floor(Math.random() * categoryAll.length)]}`,
		],
    }))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (err) {
    console.log("Error initializing data:", err);
  }
};

main();
