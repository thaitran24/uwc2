const express = require('express');
const router = express.Router();

const {
    getMCP,
    addMCP,
    deleteMCP,
    updateMCP,
    updateMCPStorage,
    genNewId
} = require('../controllers/mcp.controllers');

router.get('/', getMCP);
router.get('/new', genNewId);
router.get('/:id', getMCP);
router.post('/', addMCP);
router.delete('/:id', deleteMCP);
router.put('/:id', updateMCP);
router.put('/storage/:id', updateMCPStorage);

module.exports = router;