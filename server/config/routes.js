const mongoose = require('mongoose');
const Task = mongoose.model('Task');

var tasks = require('../controllers/tasks.js')

module.exports = function (app) {
    app.get('/tasks', function (req, res) {
        tasks.find(req, res);
    });

    app.get('/tasks/:id', function (req, res) {
        tasks.findOne(req, res);
    });

    app.post('/tasks', function (req, res) {
        tasks.create(req, res);
    });

    app.put('/tasks/:id', function (req, res) {
        tasks.update(req, res);
    });

    app.delete('/tasks/:id', function (req, res) {
        tasks.remove(req, res);
    });
}

