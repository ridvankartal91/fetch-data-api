const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Collection name on mongodb
const COLLECTION = 'records';

// Create schema for record model
const recordSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    key: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        required: true
    },
    counts: {
        type: [Number],
        required: true
    }
},
    { collection: COLLECTION }
);

// Create and export record model for proccsesing on data from mongodb
module.exports = mongoose.model('Record', recordSchema, COLLECTION);