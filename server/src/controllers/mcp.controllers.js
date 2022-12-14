const MCP = require('../models/mcp.model')
const randomNum = require('../utils/utils')

const genNewId = ((req, res) => {
    let ids = []
    MCP.getAllMCP((error, results) => {
        if (error)
        return console.error(error.message);
        ids = results;
    })
    
    let num = randomNum(0, 99999);
    let id = 'M' + num.toString().padStart(5, '0');
    while (true) {
        num = randomNum(0, 99999);
        id = 'M' + num.toString().padStart(5, '0');
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
const getMCP = ((req, res) => {
    const id = req.params.id;
    if (!id) {
        MCP.getAllMCP(function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
    else {
        MCP.getMCPById(id, function(err, rows) {
            if (err) res.json(err);
            else res.json(rows);
        })
    }
});

const addMCP = ((req, res) => {
    MCP.addMCP(req.body, function(err, _) {
        if (err) res.json(err);
        else res.json(req.body);
    })
});

const deleteMCP = ((req, res) => {
    MCP.removeMCP(req.params.id, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("MCP removed");
    })
});

const updateMCP = ((req, res) => {
    MCP.updateMCP(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("MCP updated");
    })
});

const updateMCPStorage = ((req, res) => {
    MCP.updateMCPStorage(req.params.id, req.body, function(err, _) {
        if (err) res.json(err);
        else res.status(200).json("MCP capacity updated");
    })
});

module.exports = {
    getMCP,
    addMCP,
    deleteMCP,
    updateMCP,
    updateMCPStorage,
    genNewId
};