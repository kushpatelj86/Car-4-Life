CREATE TABLE USER (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(15),
    email VARCHAR(255) UNIQUE NOT NULL,
    role ENUM('Patient', 'Doctor','Admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PATIENT_PROFILE (
    user_id INT PRIMARY KEY,
    dietary_choice VARCHAR(255),
    height FLOAT,
    weight FLOAT,
    age INT,
    religion VARCHAR(255),
    goal ENUM('Lose', 'Maintain', 'Gain'),
    activity_level ENUM('Low', 'Moderate', 'High'),
    FOREIGN KEY(user_id) REFERENCES USER(user_id)
);

CREATE TABLE DOCTOR_PROFILE (
    user_id INT PRIMARY KEY,
    specialization VARCHAR(100),
    license_number VARCHAR(50) UNIQUE,
    FOREIGN KEY(user_id) REFERENCES USER(user_id)
);


CREATE TABLE NEURODIVERGENCE (
    neurodivergence_id INT NOT NULL ,
    condition VARCHAR(255),
    date_of_diagnosis DATE,
    length_of_diagnosis INT,
    severity VARCHAR(255),
    intention_for_treatment VARCHAR(255),
    patient_user_id INT NOT NULL,
    PRIMARY KEY(neurodivergence_id), 
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);

CREATE TABLE HEALTH_ISSUE (
    health_issue_id INT NOT NULL ,
    health_issue_title VARCHAR(255),
    severity VARCHAR(255),
    duration INT,
    start_date DATE NOT NULL,
    end_date DATE,
    patient_user_id INT NOT NULL,
    PRIMARY KEY(health_issue_id), 
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);

CREATE TABLE ALLERGY (
    allergy_id INT NOT NULL ,
    allergy VARCHAR(255),
    patient_user_id INT NOT NULL,
    PRIMARY KEY(allergy_id), 
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);

CREATE TABLE DRUG_HISTORY (
    drug_history_id INT NOT NULL ,
    drug_name VARCHAR(255),
    severity VARCHAR(255),
    length INT,
    start_date DATE NOT NULL,
    end_date DATE,
    patient_user_id INT NOT NULL,
    PRIMARY KEY(drug_history_id), 
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);

CREATE TABLE FOOD (
    food_id INT NOT NULL ,
    food_name VARCHAR(255),
    calories INT,
    protein INT,
    carbohydrate INT,
    fat INT,
    food_group VARCHAR(255),
    allergy VARCHAR(255),
    diet VARCHAR(255),
    PRIMARY KEY(food_id)
);

CREATE TABLE MEAL_PLAN (
    meal_plan_id INT NOT NULL ,
    meal_plan_type VARCHAR(255) ,
    breakfast_id INT NOT NULL,
    snack1_id INT NOT NULL,
    lunch_id INT NOT NULL,
    snack2_id INT NOT NULL,
    dinner_id INT NOT NULL,
    patient_user_id INT NOT NULL,
    PRIMARY KEY(meal_plan_id),
    FOREIGN KEY(breakfast_id) REFERENCES FOOD(food_id),
    FOREIGN KEY(snack1_id) REFERENCES FOOD(food_id),
    FOREIGN KEY(lunch_id) REFERENCES FOOD(food_id),
    FOREIGN KEY(snack2_id) REFERENCES FOOD(food_id),
    FOREIGN KEY(dinner_id) REFERENCES FOOD(food_id),
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);

CREATE TABLE WEEKLY_MEAL_PLAN (
    weekly_meal_plan_id INT NOT NULL  PRIMARY KEY,
    weekly_meal_plan_type VARCHAR(255) ,
    patient_user_id INT NOT NULL,
    monday_meal_plan_id INT NOT NULL,
    tuesday_meal_plan_id INT NOT NULL,
    wednesday_meal_plan_id INT NOT NULL,
    thursday_meal_plan_id INT NOT NULL,
    friday_meal_plan_id INT NOT NULL,
    saturday_meal_plan_id INT NOT NULL,
    sunday_meal_plan_id INT NOT NULL,
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id),
    FOREIGN KEY(weekly_meal_plan_type) REFERENCES MEAL_PLAN(meal_plan_type),
    FOREIGN KEY(monday_meal_plan_id) REFERENCES MEAL_PLAN(meal_plan_id),
    FOREIGN KEY(tuesday_meal_plan_id) REFERENCES MEAL_PLAN(meal_plan_id),
    FOREIGN KEY(wednesday_meal_plan_id) REFERENCES MEAL_PLAN(meal_plan_id),
    FOREIGN KEY(thursday_meal_plan_id) REFERENCES MEAL_PLAN(meal_plan_id),
    FOREIGN KEY(friday_meal_plan_id) REFERENCES MEAL_PLAN(meal_plan_id),
    FOREIGN KEY(saturday_meal_plan_id) REFERENCES MEAL_PLAN(meal_plan_id),
    FOREIGN KEY(sunday_meal_plan_id) REFERENCES MEAL_PLAN(meal_plan_id)
);

CREATE TABLE ACTIVITY (
    activity_id INT NOT NULL ,
    activity_name VARCHAR(255),
    length_of_activity INT,
    intensity_of_activity VARCHAR(255),
    activity_type VARCHAR(255),
    location_suitability VARCHAR(255),
    equipment_needed VARCHAR(255), 
    target_muscle_group VARCHAR(255),
    is_outdoor BOOLEAN,
    PRIMARY KEY(activity_id)
);

CREATE TABLE ACTIVITY_PLAN (
    activity_plan_id INT NOT NULL ,
    sunday_activity_id INT NOT NULL,
    monday_activity_id INT NOT NULL,
    tuesday_activity_id INT NOT NULL,
    wednesday_activity_id INT NOT NULL,
    thursday_activity_id INT NOT NULL,
    friday_activity_id INT NOT NULL,
    saturday_activity_id INT NOT NULL,
    patient_user_id INT NOT NULL,
    PRIMARY KEY(activity_plan_id),
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id),
    FOREIGN KEY(sunday_activity_id) REFERENCES ACTIVITY(activity_id),
    FOREIGN KEY(monday_activity_id) REFERENCES ACTIVITY(activity_id),
    FOREIGN KEY(tuesday_activity_id) REFERENCES ACTIVITY(activity_id),
    FOREIGN KEY(wednesday_activity_id) REFERENCES ACTIVITY(activity_id),
    FOREIGN KEY(thursday_activity_id) REFERENCES ACTIVITY(activity_id),
    FOREIGN KEY(friday_activity_id) REFERENCES ACTIVITY(activity_id),
    FOREIGN KEY(saturday_activity_id) REFERENCES ACTIVITY(activity_id)
);

CREATE TABLE VACCINATION (
    vaccination_id INT NOT NULL ,
    vaccination_name VARCHAR(255),
    vaccination_types VARCHAR(255),
    total_doses_required INT NOT NULL,
    PRIMARY KEY(vaccination_id)
);

CREATE TABLE USER_VACCINATION_HISTORY (
    vaccination_history_id INT NOT NULL ,
    user_vaccination_id INT NOT NULL,
    dose_number INT NOT NULL,
    date_administered DATE,
    patient_user_id INT NOT NULL,
    status ENUM('Incomplete', 'Completed') NOT NULL,
    PRIMARY KEY(vaccination_history_id),
    FOREIGN KEY(user_vaccination_id) REFERENCES VACCINATION(vaccination_id),
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);

CREATE TABLE RECCOMENED_VACINATION (
    recommended_vaccination_id INT NOT NULL ,
    recommended_vaccination INT NOT NULL,
    number_of_doses INT NOT NULL,
    PRIMARY KEY(recommended_vaccination_id),
    patient_user_id INT NOT NULL,
    PRIMARY KEY(recommended_vaccination_id),
    FOREIGN KEY(recommended_vaccination) REFERENCES VACCINATION(vaccination_id),
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);



CREATE TABLE MEDICATION (
    medication_id INT NOT NULL ,
    medication_name VARCHAR(255),
    medication_type VARCHAR(255),
    dosage VARCHAR(100),
    PRIMARY KEY(medication_id)
);

CREATE TABLE MEDICATION_BASIS (
    medication_basis_id INT NOT NULL ,
    morning_medication_id INT NOT NULL,
    evening_medication_id INT NOT NULL,
    patient_user_id INT NOT NULL,
    PRIMARY KEY(medication_basis_id),
    FOREIGN KEY(morning_medication_id) REFERENCES MEDICATION(medication_id),
    FOREIGN KEY(evening_medication_id) REFERENCES MEDICATION(medication_id),
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id)
);

CREATE TABLE APPOINTMENT (
    appointment_id INT NOT NULL ,
    date_of_appointment DATE,
    time_of_appointment TIME,
    patient_user_id INT NOT NULL,
    doctor_user_id INT NOT NULL,
    reason_for_appointment VARCHAR(255),
    PRIMARY KEY(appointment_id),
    FOREIGN KEY(patient_user_id) REFERENCES PATIENT(user_id),
    FOREIGN KEY(doctor_user_id) REFERENCES DOCTOR(user_id)
);
