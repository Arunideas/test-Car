-- Create the database
CREATE DATABASE IF NOT EXISTS dataadmin;

-- Connect to the database
\c dataadmin;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE
);

-- Create index on email
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Insert sample data
INSERT INTO users (email, full_name, role, is_active) VALUES
    ('alex.morgan@company.com', 'Alex Morgan', 'admin', TRUE),
    ('john.doe@company.com', 'John Doe', 'user', TRUE),
    ('sarah.smith@company.com', 'Sarah Smith', 'analyst', TRUE),
    ('mike.ross@company.com', 'Mike Ross', 'user', TRUE)
ON CONFLICT (email) DO NOTHING;