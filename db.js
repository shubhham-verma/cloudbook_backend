const { default: mongoose } = require('mongoose');
require('dotenv').config();


// const mongopse = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Mongoose connected successfully");
    })
}

module.exports = connectToMongo