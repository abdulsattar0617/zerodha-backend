const mongoose = require("mongoose");

const uri = process.env.MONG0_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (err) {
        console.log(`Mongoose DB Error: ${err}`);
    }
};

module.exports = connectDB;
