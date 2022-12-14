const express = require('express');
const router = express.Router();

const {
    getTask,
    addTask,
    checkIn,
    checkOut,
    updateRoute,
    deleteTask,
    genNewId
} = require('../controllers/task.controllers');

router.get('/', getTask);
router.get('/new', genNewId);
router.get('/:id', getTask);
router.get('/employee/:emp_id', getTask);
router.get('/employee/:emp_id/:day', getTask);
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.put('/checkin/:id', checkIn);
router.put('/checkout/:id', checkOut);
router.put('/route/:id', updateRoute);

module.exports = router;