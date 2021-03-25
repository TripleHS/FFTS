CREATE TABLE users (
  id BIGINT AUTO_INCREMENT,
  first_name VARCHAR(25),
  last_name VARCHAR(50),
  username VARCHAR(25) NOT NULL UNIQUE,
  user_password VARCHAR(255),
  email VARCHAR(50) NOT NULL UNIQUE,
  user_role VARCHAR(15) NOT NULL,
  user_description VARCHAR(1000),
  PRIMARY KEY (id)
);

CREATE TABLE phone (
  phone_number VARCHAR(15),
  user_id BIGINT NOT NULL,
  phone_type VARCHAR(25),
  PRIMARY KEY (phone_number),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE specializations (
  id INT AUTO_INCREMENT,
  scope VARCHAR(20) NOT NULL,
  details VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE addresses (
  id BIGINT AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  street VARCHAR(50) NOT NULL,
  building VARCHAR(15) NOT NULL,
  apartment VARCHAR(10),
  postal_code VARCHAR(6) NOT NULL,
  city VARCHAR(50) NOT NULL,
  country_state VARCHAR(25) NOT NULL,
  country VARCHAR(50) NOT NULL,
  additional_info VARCHAR(1000),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE users_specializations (
  id BIGINT AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  specialization_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (specialization_id) REFERENCES specializations(id)
);

CREATE TABLE organizers (
  id BIGINT AUTO_INCREMENT,
  address_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  title VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (address_id) REFERENCES addresses(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE visits (
  id BIGINT AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  organizer_id BIGINT NOT NULL,
  visit_date TIMESTAMP NOT NULL,
  duration int NOT NULL,
  visit_type VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (organizer_id) REFERENCES organizers(id)
);

CREATE TABLE working_hours (
  id BIGINT AUTO_INCREMENT,
  organizer_id BIGINT NOT NULL,
  day DATE NOT NULL,
  start_hour TIME NOT NULL,
  end_hour TIME NOT NULL,
  lunch_start TIME,
  lunch_duration INT,
  PRIMARY KEY (id),
  FOREIGN KEY (organizer_id) REFERENCES organizers(id)
)
