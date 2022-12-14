const Vehicle = require('../models/vehicle.model')
const randomNum = require('../utils/utils')

const genNewId = ((req, res) => {
    let ids = []
    Vehicle.getAllVehicle((error, results) => {
        if (error)
        return console.error(error.message);
        ids = results;
    })
    
    let num = randomNum(0, 99999);
    let id = 'V' + num.toString().padStart(5, '0');
    while (true) {
        num = randomNum(0, 99999);
        id = 'V' + num.toString().padStart(5, '0');
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

const getVehicle = ((req, res) => {
    const id = req.params.id;
    if (!id) {
        Vehicle.getAllVehicle(function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
    else {
        Vehicle.getVehicleById(id, function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
});

const addVehicle = ((req, res) => {
    Vehicle.addVehicle(req.body, function(err, _) {
        if (err) res.json(err);
        else res.json(req.body);
    })
});

const deleteVehicle = ((req, res) => {
    Vehicle.removeVehicle(req.params.id, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Vehicle removed");
    })
});

const updateVehicle = ((req, res) => {
    Vehicle.updateVehicle(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Vehicle updated");
    })
});

const updateVehicleConsumption = ((req, res) => {
    Vehicle.updateVehicleConsumption(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Vehicle capacity updated");
    })
});

const updateVehicleStatus = ((req, res) => {
    Vehicle.updateVehicleStatus(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Vehicle capacity updated");
    })
});

module.exports = {
    getVehicle,
    addVehicle,
    deleteVehicle,
    updateVehicle,
    updateVehicleConsumption,
    updateVehicleStatus,
    genNewId
};