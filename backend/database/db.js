import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  multipleStatements: true
});

const sqlStatements = [
  "CREATE DATABASE IF NOT EXISTS CARCAREDB",
  "USE CARCAREDB",

  `CREATE TABLE IF NOT EXISTS USER (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    role ENUM('OWNER','MECHANIC','ADMIN','FLEET_MANAGER') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`,

  `CREATE TABLE IF NOT EXISTS DRIVER_PROFILE (
    user_id INT PRIMARY KEY,
    phone_number VARCHAR(15),
    address VARCHAR(255),
    access_level ENUM('Low','Medium','High') DEFAULT 'Low',
    FOREIGN KEY(user_id) REFERENCES USER(user_id)
  )`,

  `CREATE TABLE IF NOT EXISTS CAR (
    car_id INT AUTO_INCREMENT PRIMARY KEY,
    owner_user_id INT NOT NULL,
    assigned_driver_id INT,
    make VARCHAR(100),
    model VARCHAR(100),
    year INT,
    vin VARCHAR(50) UNIQUE,
    mileage INT,
    fuel_type ENUM('Petrol','Diesel','Electric','Hybrid'),
    FOREIGN KEY(owner_user_id) REFERENCES USER(user_id),
    FOREIGN KEY(assigned_driver_id) REFERENCES USER(user_id)
  )`,

  `CREATE TABLE IF NOT EXISTS SERVICE_RECORD (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    mechanic_user_id INT,
    service_date DATE NOT NULL,
    service_type VARCHAR(255),
    notes TEXT,
    cost DECIMAL(10,2),
    FOREIGN KEY(car_id) REFERENCES CAR(car_id),
    FOREIGN KEY(mechanic_user_id) REFERENCES USER(user_id)
  )`,

  `CREATE TABLE IF NOT EXISTS SERVICE_PART (
    service_part_id INT AUTO_INCREMENT PRIMARY KEY,
    service_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cost DECIMAL(10,2),
    quantity INT DEFAULT 1,
    FOREIGN KEY(service_id) REFERENCES SERVICE_RECORD(service_id)
  )`,

  `CREATE TABLE IF NOT EXISTS PREDICTIVE_ALERT (
    alert_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    recommended_task VARCHAR(255),
    due_mileage INT,
    due_date DATE,
    confidence_level DECIMAL(5,2) DEFAULT 100,
    completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
  )`,

  `CREATE TABLE IF NOT EXISTS REMINDER (
    reminder_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    reminder_type VARCHAR(255),
    due_date DATE,
    message TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
  )`,

  `CREATE TABLE IF NOT EXISTS CAR_HEALTH_SCORE (
    score_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    date_recorded DATE,
    health_score DECIMAL(5,2),
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
  )`,

  `CREATE TABLE IF NOT EXISTS APPOINTMENT (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    mechanic_user_id INT NOT NULL,
    date_of_appointment DATE,
    time_of_appointment TIME,
    reason VARCHAR(255),
    status ENUM('Scheduled','Completed','Cancelled') DEFAULT 'Scheduled',
    FOREIGN KEY(car_id) REFERENCES CAR(car_id),
    FOREIGN KEY(mechanic_user_id) REFERENCES USER(user_id)
  )`,

  `CREATE TABLE IF NOT EXISTS MECHANIC_RATING (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    mechanic_user_id INT NOT NULL,
    owner_user_id INT NOT NULL,
    service_id INT,
    rating INT CHECK(rating BETWEEN 1 AND 5),
    feedback TEXT,
    rating_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(mechanic_user_id) REFERENCES USER(user_id),
    FOREIGN KEY(owner_user_id) REFERENCES USER(user_id),
    FOREIGN KEY(service_id) REFERENCES SERVICE_RECORD(service_id)
  )`,

  `CREATE TABLE IF NOT EXISTS NOTIFICATION (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES USER(user_id)
  )`,

  `CREATE TABLE IF NOT EXISTS SERVICE_COST_SUMMARY (
    summary_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    total_cost DECIMAL(10,2) DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
  )`,

  `CREATE TABLE IF NOT EXISTS VEHICLE_METRICS (
    metric_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    date_recorded DATE NOT NULL,
    mileage INT,
    engine_temperature DECIMAL(5,2),
    oil_level DECIMAL(5,2),
    brake_wear DECIMAL(5,2),
    battery_health DECIMAL(5,2),
    tire_pressure DECIMAL(5,2),
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
  )`,

  `CREATE TABLE IF NOT EXISTS TRIP (
    trip_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    driver_user_id INT NOT NULL,
    start_location VARCHAR(255),
    end_location VARCHAR(255),
    start_time DATETIME,
    end_time DATETIME,
    distance_km DECIMAL(10,2),
    fuel_used_liters DECIMAL(10,2),
    start_mileage INT,
    end_mileage INT,
    purpose VARCHAR(255),
    notes TEXT,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id),
    FOREIGN KEY(driver_user_id) REFERENCES USER(user_id)
  )`,

  `CREATE TABLE IF NOT EXISTS TRIP_REPORT (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    report_month DATE NOT NULL,
    total_distance DECIMAL(10,2) DEFAULT 0,
    total_fuel DECIMAL(10,2) DEFAULT 0,
    average_efficiency DECIMAL(5,2) DEFAULT 0,
    FOREIGN KEY(car_id) REFERENCES CAR(car_id)
  )`
];

sqlStatements.forEach((sql) => {
  db.query(sql, (err) => {
    if (err) {
      console.error("Error executing:", sql.split("(")[0], "|", err.message);
    } else {
      console.log("Executed:", sql.split("(")[0]);
    }
  });
});

export default db;
