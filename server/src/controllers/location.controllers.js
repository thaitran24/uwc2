const Location = require('../models/location.model')
const randomNum = require('../utils/utils')

const genNewId = ((req, res) => {
    let ids = []
    Location.getAllLocation((error, results) => {
        if (error)
        return console.error(error.message);
        ids = results;
    })
    
    let num = randomNum(0, 99999);
    let id = 'L' + num.toString().padStart(5, '0');
    while (true) {
        num = randomNum(0, 99999);
        id = 'L' + num.toString().padStart(5, '0');
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

const getLocation = ((req, res) => {
    const id = req.params.id;
    if (id) {
        Location.getAllLocation(function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
    else {
        Location.getLocationById(id, function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
});

const addLocation = ((req, res) => {
    Location.addLocation(req.body, function(err, _) {
        if (err) res.json(err);
        else res.json(req.body);
    })
});

const deleteLocation = ((req, res) => {
    Location.removeLocation(req.params.id, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Location removed");
    })
});

const updateLocation = ((req, res) => {
    Location.updateLocation(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("Location updated");
    })
});

module.exports = {
    getLocation,
    addLocation,
    deleteLocation,
    updateLocation,
    genNewId
};