const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
workoutSchema.set("timestamps", false);
const WorkoutModel = mongoose.model("workout", workoutSchema);
module.exports = WorkoutModel;