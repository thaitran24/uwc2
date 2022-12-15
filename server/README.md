# Server for UWC2
## Set up environment
For connecting to MySQL database, create `.env` with format:
```
DB_HOST="<database_host>"
DB_PORT="<host_port>"
DB_USER="<database_user>"
DB_PASSWORD="<database_password>"
DB_NAME="<database_name>"
```
Also run the `server/database/*.sql` file in increasing order for creating database. 

## How to run
- Install NodeJS
- Install packages by: `npm install`
- Set up environment above and run: `npm run`

## Check out for more api url in `src/routes` folder
## TASK
- `GET API` - `api/task/`: Get all task
- `GET API` - `api/task/:id`: Get task by id
- `GET API` - `api/task/employee/:emp_id`: Get task by employee id
- `GET API` - `api/task/employee/:emp_id/:day`: Get task by employee and day
- `POST API` - `api/task/`: Add new task
- `PUT API` - `api/task/checkin/:id`: Check-in task by task id
- `PUT API` - `api/task/checkout/:id`: Check-out task by task id
- `PUT API` - `api/task/route/:id`: Update route by task id
- `...`: More API in `src/routes/` folder

## MCP
- `GET API` - `api/mcp/`: Get all mcp
- `GET API` - `api/mcp/:id`: Get all mcp (Pass param to `Axios`)
- `POST API` - `api/mcp/`: Add new mcp
- `DELETE API` - `api/mcp/:id`: Delete mcp by mcp id
- `PUT API` - `api/mcp/storage/:id`: Update mcp storage
- `...`: More API in `src/routes/` folder

## Employee
- `GET API` - `api/employee/`: Get all employee
- `GET API` - `api/employee/:id`: Get employee by id
- `POST API` - `api/employee/`: Add new employee
- `...`: More API in `src/routes/` folder