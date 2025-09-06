CREATE DATABASE IF NOT EXISTS CARCAREDB;
USE CARCAREDB;

CREATE TABLE IF NOT EXISTS USER (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    role ENUM('OWNER','MECHANIC') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS OWNER_PROFILE (
    user_id INT PRIMARY KEY,
    phone_number VARCHAR(15),
    address VARCHAR(255),
    FOREIGN KEY(user_id) REFERENCES USER(user_id)
);


CREATE TABLE IF NOT EXISTS CAR (
    car_id INT AUTO_INCREMENT PRIMARY KEY,
    owner_user_id INT NOT NULL,
    make VARCHAR(100),
    model VARCHAR(100),
    year INT,
    vin VARCHAR(50) UNIQUE,
    mileage INT,
    fuel_type ENUM('Petrol','Diesel','Electric','Hybrid'),
    FOREIGN KEY(owner_user_id) REFERENCES USER(user_id)
);

CREATE TABLE IF NOT EXISTS SERVICE_RECORD (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    mechanic_user_id INT,
    service_date DATE NOT NULL,
    service_type VARCHAR(255),
    notes TEXT,
    cost DECIMAL(10,2),
    FOREIGN KEY(car_id) REFERENCES CAR(car_id),
    FOREIGN KEY(mechanic_user_id) REFERENCES USER(user_id)
);

CREATE TABLE IF NOT EXISTS APPOINTMENT (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    mechanic_user_id INT NOT NULL,
    date_of_appointment DATE,
    time_of_appointment TIME,
    reason VARCHAR(255),
    status ENUM('Scheduled','Completed','Cancelled') DEFAULT 'Scheduled',
    FOREIGN KEY(car_id) REFERENCES CAR(car_id),
    FOREIGN KEY(mechanic_user_id) REFERENCES USER(user_id)
);

CREATE TABLE IF NOT EXISTS PART (
    part_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cost DECIMAL(10,2)
);

CREATE TABLE IF NOT EXISTS SERVICE_PART (
    service_part_id INT AUTO_INCREMENT PRIMARY KEY,
    service_id INT NOT NULL,
    part_id INT NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY(service_id) REFERENCES SERVICE_RECORD(service_id),
    FOREIGN KEY(part_id) REFERENCES PART(part_id)
);

CREATE TABLE IF NOT EXISTS REMINDER (
    reminder_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    reminder_type VARCHAR(255),
    due_date DATE,
    message TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
);

CREATE TABLE IF NOT EXISTS CAR_SCORE (
    score_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    date_recorded DATE DEFAULT CURRENT_DATE,
    overall_score DECIMAL(5,2) DEFAULT 100,
    maintenance_score DECIMAL(5,2) DEFAULT 100,
    mileage_score DECIMAL(5,2) DEFAULT 100,
    appointment_score DECIMAL(5,2) DEFAULT 100,
    part_score DECIMAL(5,2) DEFAULT 100,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
);

CREATE TABLE IF NOT EXISTS PREDICTIVE_ALERT (
    alert_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    recommended_task VARCHAR(255) NOT NULL,
    due_mileage INT,
    due_date DATE,
    confidence_level DECIMAL(5,2) DEFAULT 80,  
    is_completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
);
