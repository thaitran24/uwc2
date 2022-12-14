const database = require('./database');

const Authenticate = {
    getUsername: function(callback) {
        const sqlQuery = "SELECT username FROM EMPLOYEE";
        return database.query(sqlQuery, callback);
    },

    getPassword: function(username, callback) {
        const sqlQuery = "SELECT password FROM EMPLOYEE WHERE EMPLOYEE.username=?";
        return database.query(sqlQuery, [username], callback);
    },

    getUser: function(username, callback) {
        const sqlQuery = "SELECT emp_id, name, gender, email, birthday, role, working_area, username FROM EMPLOYEE WHERE EMPLOYEE.username=?";
        return database.query(sqlQuery, [username], callback);
    }
}

module.exports = Authenticate;