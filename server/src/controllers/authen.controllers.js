const Authenticate = require('../models/authen.model')

const authenticate = ((req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    if (!username || !password) {
        res.status(403).json("Invalid username or password");
    }
    else {
        Authenticate.getPassword(username, function(err, rows) {
            let db_pwd = rows[0].password;
            if (err) res.json(err);
            else if (!db_pwd) {
                res.status(403).json("Invalid username or password");
            }
            else if (db_pwd !== password) {
                res.status(403).json("Invalid username or password");
            }
            else {
                Authenticate.getUser(username, function(err, rows) {
                    if (err) res.json(err);
                    else res.json(rows);
                })
            }
        })
    }
});

module.exports = {
    authenticate
};