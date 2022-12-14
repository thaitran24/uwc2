const express = require('express');
const router = express.Router();

const {
    authenticate
} = require('../controllers/authen.controllers');

router.get('/:username/:password', authenticate);

module.exports = router;