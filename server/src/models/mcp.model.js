const database = require('./database');

const MCP = {
    getAllMCP: function(callback) {
        const sqlQuery = "SELECT * FROM MCP";
        return database.query(sqlQuery, callback);
    },

    getMCPById: function(id, callback) {
        const sqlQuery = "SELECT * FROM MCP, LOCATION WHERE MCP.mcp_id=? AND MCP.location_id=LOCATION.location_id";
        return database.query(sqlQuery, [id], callback);
    },

    addMCP: function(mcp, callback) {
        const sqlQuery = "INSERT INTO MCP(mcp_id, location_id, address, storage, capacity) VALUES(?, ?, ?, ?, ?)";
        return database.query(sqlQuery, [mcp.mcp_id, mcp.location_id, mcp.address, mcp.storage, mcp.capacity], callback);
    },

    removeMCP: function(id, callback) {
        const sqlQuery = "DELETE FROM MCP WHERE MCP.mcp_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    updateMCP: function(id, mcp, callback) {
        const sqlQuery = "UPDATE MCP SET address=?, storage=?, capacity=?, mcp_area=? WHERE MCP.mcp_id=?";
        return database.query(sqlQuery, [mcp.address, mcp.storage, mcp.capacity, 
                                         mcp.mcp_area, id], callback);
    },

    updateMCPStorage: function(id, mcp, callback) {
        const sqlQuery = "UPDATE MCP SET storage=? WHERE MCP.mcp_id=?";
        return database.query(sqlQuery, [mcp.storage, id], callback);
    }
}

module.exports = MCP;