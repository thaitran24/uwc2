const database = require('./database');

const Location = {
    getAllLocation: function(callback) {
        const sqlQuery = "SELECT * FROM AREA";
        return database.query(sqlQuery, callback);
    },

    getLocationById: function(id, callback) {
        const sqlQuery = "SELECT * FROM AREA WHERE AREA.location_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    addLocation: function(location, callback) {
        const sqlQuery = "INSERT INTO AREA(location_id, latitude, longitude) VALUES(?, ?, ?)";
        return database.query(sqlQuery, [location.location_id, location.latitude, location.longitude], callback);
    },

    removeLocation: function(id, callback) {
        const sqlQuery = "DELETE FROM AREA WHERE AREA.location_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    updateLocation: function(id, location, callback) {
        const sqlQuery = "UPDATE AREA SET latitude=? longitude=? WHERE AREA.location_id=?";
        return database.query(sqlQuery, [location.latitude, location.longitude, id], callback);
    },
}

module.exports = Location;