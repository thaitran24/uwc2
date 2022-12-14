const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const employee_routes = require('./src/routes/employee.route');
const mcp_routes = require('./src/routes/mcp.route');
const vehicle_routes = require('./src/routes/vehicle.route');
const location_routes = require('./src/routes/location.route');
const authen_routes = require('./src/routes/authen.route');
const task_routes = require('./src/routes/task.route');

require('dotenv').config();

const HOST = "localhost";
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/employee', employee_routes);
app.use('/api/mcp', mcp_routes);
app.use('/api/vehicle', vehicle_routes);
app.use('/api/location', location_routes);
app.use('/api/authenticate', authen_routes);
app.use('/api/task', task_routes);

app.listen(PORT, HOST, () => {
    console.log("Running on: " + HOST + ":" + PORT);
})