const database = require('./database');

const Vehicle = {
    getAllVehicle: function(callback) {
        const sqlQuery = "SELECT * FROM VEHICLE, LOCATION WHERE VEHICLE.vehicle_location=LOCATION.location_id";
        return database.query(sqlQuery, callback);
    },

    getVehicleById: function(id, callback) {
        const sqlQuery = "SELECT * FROM VEHICLE, LOCATION WHERE VEHICLE.vehicle_id=? AND VEHICLE.vehicle_location=LOCATION.location_id";
        return database.query(sqlQuery, [id], callback);
    },

    addVehicle: function(vehicle, callback) {
        const sqlQuery = "INSERT INTO VEHICLE(vehicle_id, type, status, vehicle_area, consumption) VALUES(?, ?, ?, ?, ?)";
        return database.query(sqlQuery, [vehicle.id, vehicle.type, vehicle.status, vehicle.vehicle_area, 
                                         vehicle.consumption], callback);
    },

    removeVehicle: function(id, callback) {
        const sqlQuery = "DELETE FROM VEHICLE WHERE VEHICLE.vehicle_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    updateVehicle: function(id, vehicle, callback) {
        const sqlQuery = "UPDATE VEHICLE SET type=?, status=?, vehicle_area=?, consumption=? WHERE VEHICLE.vehicle_id=?";
        return database.query(sqlQuery, [vehicle.type, vehicle.status, vehicle.vehicle_area, 
                                         vehicle.consumption, id], callback);
    },

    updateVehicleConsumption: function(id, vehicle, callback) {
        const sqlQuery = "UPDATE VEHICLE SET consumption=? WHERE VEHICLE.vehicle_id=?";
        return database.query(sqlQuery, [vehicle.consumption, id], callback);
    },

    updateVehicleStatus: function(id, vehicle, callback) {
        const sqlQuery = "UPDATE VEHICLE SET status=? WHERE VEHICLE.vehicle_id=?";
        return database.query(sqlQuery, [vehicle.status, id], callback);
    }
}

module.exports = Vehicle;