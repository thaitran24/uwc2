const express = require('express');
const router = express.Router();

const {
    getEmployee,
    addEmployee,
    deleteEmployee,
    updateEmployee,
    updatePassword,
    genNewId
} = require('../controllers/employee.controllers');

router.get('/', getEmployee);
router.get('/new', genNewId);
router.get('/:id', getEmployee);
router.post('/', addEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);

module.exports = router;