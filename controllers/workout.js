const Workout = require("../models/workout");


const home = async (req, res) => {
    try {
        const data = await Workout.find({});
        res.render('home', { data, flash: req.flash() });
    } catch (err) {
        res.status(500).send('Error fetching workout trackers');
    }
};


const addView = (req, res) => {
    res.render('add');
};
const add = async (req, res) => {
    try {
        const { title, description, duration, calories, date } = req.body;
        const newWorkout = new Workout({ title, description, duration, calories, date });
        await newWorkout.save();
        req.flash("workout_msg", "A new workout tracker has been added");
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error adding workout tracker');
    }
};


const editView = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        res.render('edit', { workout, flash: req.flash() });
    } catch (err) {
        res.status(500).send('Error fetching workout tracker for editing');
    }
};
const edit = async (req, res) => {
    try {
        const { id, title, description, duration, calories, date } = req.body;
        await Workout.findByIdAndUpdate(id, { title, description, duration, calories, date });
        req.flash("workout_msg", "save changes successfully");
        res.redirect('/edit/'+id);
    } catch (err) {
        res.status(500).send('Error editing workout tracker');
    }
};


const remove = async (req, res) => {
    try {
        const deletedWorkout = await Workout.deleteOne({_id: req.params.id});
        if (deletedWorkout) {
            req.flash("workout_msg", "item has removed");
        }else{
            req.flash("workout_msg", "item not found!");
        }
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error removing workout tracker');
    }
};


module.exports = {
    home,
    addView,
    add,
    editView,
    edit,
    remove
};