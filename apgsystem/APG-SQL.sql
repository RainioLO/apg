create database apg;
use apg;

CREATE TABLE IF NOT EXISTS customer_table (
    customerID VARCHAR(255) PRIMARY KEY,
    addDate DATE,
    chinName VARCHAR(255),
    engName VARCHAR(255),
    nature VARCHAR(255),
    contactPerson VARCHAR(255),
    contactNumber VARCHAR(255),
    address VARCHAR(255),
    deposit DECIMAL(10, 2),
    remark VARCHAR(255),
    status VARCHAR(255)
);

INSERT INTO Customers (customerID, addDate, chinName, engName, nature, contactPerson, contactNumber, address, deposit, remark, status) VALUES
('APG53EUHD7', '2024-07-26', 'XXX Co. Ltd', 'XXX', 'Science', 'Tony Tsang', '584715100', 'XXXX', 7000.00, 'XX', 'Contacted'),
('APG33JCL8L', '2024-07-29', 'VisionAscent Co. Ltd', 'VisionAscent', 'Engineering', 'Tony Tsang', '584710755', 'ERTIQQQ', 100000.00, '', 'Contacted'),
('APG05J9E2U', '2024-07-29', 'Nexus Point Co. Ltd', 'Nexus Point', 'Engineering', 'Tony Tsang', '584715100', 'dd', 1111.00, '', 'Active'),
('APGD6T7927', '2024-07-29', 'XXX Co. Ltd', 'XXX XXX', 'Science', 'Tony Tsang', '57481748', 'TSW888', 7100.00, 'XXXXX', 'Active'),
('APG6P5KZGC', '2024-07-26', 'TechnoPulse Co. Ltd', 'TechnoPulse', 'Science', 'Tony Ng', '87444089', 'TechnoPulse', 40000.00, '', 'Contacted');