const express = require('express');
const router = express.Router();

const {
    getLocation,
    addLocation,
    deleteLocation,
    updateLocation,
    genNewId
} = require('../controllers/location.controllers');

router.get('/', getLocation);
router.get('/new', genNewId);
router.get('/:id', getLocation);
router.post('/', addLocation);
router.delete('/:id', deleteLocation);
router.put('/:id', updateLocation);

module.exports = router;