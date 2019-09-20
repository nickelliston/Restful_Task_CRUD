const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, requried: true },
    description: { type: String, required: true, default: ''},
    completed:{type: Boolean, default: false}
}, { timestamps: true, default: Date.now })
const Task = mongoose.model('Task', TaskSchema);