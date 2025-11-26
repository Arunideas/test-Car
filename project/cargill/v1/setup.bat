@echo off
echo ====================================
echo DataAdmin Setup Script
echo ====================================
echo.

echo [1/4] Setting up Backend...
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
cd ..
echo Backend setup complete!
echo.

echo [2/4] Setting up Frontend...
cd frontend
call npm install
cd ..
echo Frontend setup complete!
echo.

echo [3/4] Database Setup Instructions:setup
echo Please ensure PostgreSQL is installed and running.
echo Create a database named 'dataadmin' with:
echo   - Username: postgres
echo   - Password: postgres
echo   - Host: localhost
echo   - Port: 5432
echo.
echo Or run: psql -U postgres -f database\init.sql
echo.

echo [4/4] Setup Complete!
echo.
echo To start the application:
echo   - Run backend: run-backend.bat
echo   - Run frontend: run-frontend.bat
echo.
pause