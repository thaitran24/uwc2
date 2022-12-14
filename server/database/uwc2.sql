DROP DATABASE IF EXISTS uwc2;
CREATE DATABASE uwc2;
USE uwc2;

DROP TABLE IF EXISTS LOCATION;
CREATE TABLE LOCATION(
    location_id         CHAR(6)         PRIMARY KEY,
    latitude            VARCHAR(20)     NOT NULL,
    longitude           VARCHAR(20)     NOT NULL
);

DROP TABLE IF EXISTS MCP;
CREATE TABLE MCP(
	mcp_id	            CHAR(6)	        PRIMARY KEY,
    location_id         CHAR(6)         NOT NULL,
    address             VARCHAR(100)    NOT NULL,
    storage             FLOAT           NOT NULL,
    capacity            FLOAT           NOT NULL,
    
    CONSTRAINT          fk_location
                        FOREIGN KEY (location_id)
                        REFERENCES LOCATION(location_id)
                        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS VEHICLE;
CREATE TABLE VEHICLE(
	vehicle_id	        CHAR(6)	        PRIMARY KEY,
    type                VARCHAR(30)     NOT NULL,
    status              BOOLEAN         NOT NULL,
    vehicle_location    CHAR(6)         NOT NULL,
    consumption         INT             NOT NULL,

    CONSTRAINT          fk_vehicle_location
                        FOREIGN KEY (vehicle_location)
                        REFERENCES LOCATION(location_id)
                        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS EMPLOYEE;
CREATE TABLE EMPLOYEE(
	emp_id	            CHAR(6)	        PRIMARY KEY,
    name                VARCHAR(30)     NOT NULL,
    email               VARCHAR(50)     NOT NULL,
    birthday            DATE            NOT NULL,
    gender              CHAR(1)         NOT NULL,
    role                CHAR(1)         NOT NULL,   # 0: janitor, 1: collector, 2: back officer, 3: server manager
    working_area        CHAR(6)         NOT NULL,
    username	        VARCHAR(16)     NOT NULL,
    password            VARCHAR(100)    NOT NULL,

    CONSTRAINT          fk_working_area
                        FOREIGN KEY (working_area)
                        REFERENCES LOCATION(location_id)
                        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS SHIFT;
CREATE TABLE SHIFT(
	shift_id	        CHAR(6)	        PRIMARY KEY,
    start_time       CHAR(5)            NOT NULL,
    end_time            CHAR(5)            NOT NULL
);

DROP TABLE IF EXISTS TASK;
CREATE TABLE TASK(
    task_id             CHAR(6)         PRIMARY KEY,
    emp_id              CHAR(6)         NOT NULL,
    day                 DATE            NOT NULL,
    shift_id            CHAR(6)         NOT NULL,
    check_in            BOOLEAN         NOT NULL,
    check_out           BOOLEAN         NOT NULL,
    vehicle_id          CHAR(6)         NOT NULL,
    mcp_ids             VARCHAR(100)    NOT NULL,

    CONSTRAINT          fk_task_emp
                        FOREIGN KEY (emp_id)
                        REFERENCES EMPLOYEE(emp_id)
                        ON DELETE SET DEFAULT ON UPDATE CASCADE,

    CONSTRAINT          fk_task_vehicle
                        FOREIGN KEY (vehicle_id)
                        REFERENCES VEHICLE(vehicle_id)
                        ON DELETE SET DEFAULT ON UPDATE CASCADE
);