const database = require('./database');

const Task = {
    getAllTask: function(callback) {
        const sqlQuery = "SELECT * FROM TASK";
        return database.query(sqlQuery, callback);
    },

    getTaskById: function(id, callback) {
        const sqlQuery = "SELECT * FROM TASK WHERE TASK.task_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    getTaskByEmpId: function(id, callback) {
        const sqlQuery = "SELECT * FROM TASK WHERE TASK.emp_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    getTaskByEmpDate: function(emp_id, day, callback) {
        const sqlQuery = "SELECT * FROM TASK WHERE TASK.emp_id=? AND TASK.day=?";
        return database.query(sqlQuery, [emp_id, day], callback);
    },

    addTask: function(task, callback) {
        const sqlQuery = "INSERT INTO TASK(task_id, emp_id, day, shift_id, check_in, check_out, vehicle_id, mcp_ids) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        return database.query(sqlQuery, [task.task_id, task.emp_id, task.day, task.shift_id, 
                                         task.check_in, task.check_out, task.vehicle_id, task.mcp_ids], callback);
    },

    checkIn: function(id, callback) {
        const sqlQuery = "UPDATE TASK SET check_in=true WHERE TASK.task_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    checkOut: function(id, callback) {
        const sqlQuery = "UPDATE TASK SET check_out=true WHERE TASK.task_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    updateRoute: function(id, task, callback) {
        const sqlQuery = "UPDATE VEHICLE SET mcp_ids=? WHERE TASK.task_id=?";
        return database.query(sqlQuery, [task.mcp_ids, id], callback);
    },

    removeTask: function(id, callback) {
        const sqlQuery = "DELETE FROM TASK WHERE TASK.task_id=?";
        return database.query(sqlQuery, [id], callback);
    }
}

module.exports = Task;