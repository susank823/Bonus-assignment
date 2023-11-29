const mongoose = require('mongoose');
require('dotenv').config();

const database = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw new Error('Error connecting to MongoDB');
    }
};

module.exports = database;