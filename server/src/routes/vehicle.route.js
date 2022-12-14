const express = require('express');
const router = express.Router();

const {
    getVehicle,
    addVehicle,
    deleteVehicle,
    updateVehicle,
    updateVehicleConsumption,
    updateVehicleStatus,
    genNewId
} = require('../controllers/vehicle.controllers');

router.get('/', getVehicle);
router.get('/new', genNewId);
router.get('/:id', getVehicle);
router.post('/', addVehicle);
router.delete('/:id', deleteVehicle);
router.put('/:id', updateVehicle);
router.put('/consumption/:id', updateVehicleConsumption)
router.put('/status/:id', updateVehicleStatus)

module.exports = router;