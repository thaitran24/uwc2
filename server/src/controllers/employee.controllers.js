const Employee = require('../models/employee.model')
const randomNum = require('../utils/utils')

const genNewId = ((req, res) => {
    let ids = []
    Employee.getAllEmployee((error, results) => {
        if (error)
        return console.error(error.message);
        ids = results;
    })
    
    let num = randomNum(0, 99999);
    let id = 'E' + num.toString().padStart(5, '0');
    while (true) {
        num = randomNum(0, 99999);
        id = 'E' + num.toString().padStart(5, '0');
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

const getEmployee = ((req, res) => {
    const id = req.params.id;
    if (!id) {
        Employee.getAllEmployee(function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
    else {
        Employee.getEmployeeById(id, function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
});

const addEmployee = ((req, res) => {
    Employee.addEmployee(req.body, function(err, _) {
        if (err) res.json(err);
        else res.json(req.body);
    })
});

const deleteEmployee = ((req, res) => {
    Employee.removeEmployee(req.params.id, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Employee removed");
    })
});

const updateEmployee = ((req, res) => {
    Employee.updateEmployee(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Employee updated");
    })
});

const updatePassword = ((req, res) => {
    Employee.updatePassword(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Employee updated");
    })
});

module.exports = {
    getEmployee,
    addEmployee,
    deleteEmployee,
    updateEmployee,
    updatePassword,
    genNewId
};