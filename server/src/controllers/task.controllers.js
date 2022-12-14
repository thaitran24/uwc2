const Task = require('../models/task.model')
const randomNum = require('../utils/utils')

const genNewId = ((req, res) => {
    let ids = []
    Task.getAllTask((error, results) => {
        if (error)
        return console.error(error.message);
        ids = results;
    })
    
    let num = randomNum(0, 99999);
    let id = 'T' + num.toString().padStart(5, '0');
    while (true) {
        num = randomNum(0, 99999);
        id = 'T' + num.toString().padStart(5, '0');
        const emp = ids.find(e => {
            if (e.emp_id === id)
                return true;
            return false;
        })

        if (emp !== undefined) continue;
        else break;
    }
    res.json({id: id});
})

const getTask = ((req, res) => {
    const task_id = req.params.id;
    const day = req.params.day;
    const emp_id = req.params.emp_id;
    if (task_id) {
        Task.getTaskById(task_id, function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
    else if (emp_id && !day) {
        Task.getTaskByEmpId(emp_id, function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
    else if (emp_id && day) {
        Task.getTaskByEmpDate(emp_id, day, function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
    else {
        Task.getAllTask(function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
});

const addTask = ((req, res) => {
    Task.addTask(req.body, function(err, _) {
        if (err) res.json(err);
        else res.json(req.body);
    })
});

const checkIn = ((req, res) => {
    Task.checkIn(req.params.id, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Check in succesful");
    })
});

const checkOut = ((req, res) => {
    Task.checkOut(req.params.id, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Check out succesful");
    })
});

const deleteTask = ((req, res) => {
    Task.removeTask(req.params.id, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Task removed");
    })
});

const updateRoute = ((req, res) => {
    Task.updateRoute(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Route updated");
    })
});

module.exports = {
    getTask,
    addTask,
    checkIn,
    checkOut,
    updateRoute,
    deleteTask,
    genNewId
};