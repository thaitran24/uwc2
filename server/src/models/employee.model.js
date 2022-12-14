const database = require('./database');

const Employee = {
    getAllEmployee: function(callback) {
        const sqlQuery = "SELECT emp_id, name, gender, email, birthday, role, working_area FROM EMPLOYEE";
        return database.query(sqlQuery, callback);
    },

    getEmployeeById: function(id, callback) {
        const sqlQuery = "SELECT emp_id, name, gender, email, birthday, role, working_area FROM EMPLOYEE WHERE EMPLOYEE.emp_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    addEmployee: function(employee, callback) {
        const sqlQuery = "INSERT INTO EMPLOYEE(emp_id, name, gender, email, birthday, role, working_area, username, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return database.query(sqlQuery, [employee.emp_id, employee.name, employee.gender, employee.email, employee.birthday, 
                                        employee.role, employee.working_area, employee.username, employee.password], callback);
    },

    removeEmployee: function(id, callback) {
        const sqlQuery = "DELETE FROM EMPLOYEE WHERE EMPLOYEE.emp_id=?";
        return database.query(sqlQuery, [id], callback);
    },

    updateEmployee: function(id, employee, callback) {
        const sqlQuery = "UPDATE EMPLOYEE SET  name=?, gender=?, email=?, birthday=?, role=?, working_area=? WHERE EMPLOYEE.emp_id=?";
        return database.query(sqlQuery, [employee.name, employee.gender, employee.email, employee.birthday, 
                                         employee.role, employee.working_area, id], callback);
    },

    updatePassword: function(id, employee, callback) {
        const sqlQuery = "UPDATE EMPLOYEE SET password=? WHERE EMPLOYEE.emp_id=?";
        return database.query(sqlQuery, [employee.password, id], callback);
    },
};

module.exports = Employee;
