@echo off
echo ====================================
echo Starting DataAdmin Backend
echo ====================================
echo.

cd backend
call venv\Scripts\activate
echo Backend starting on http://localhost:8000
echo API Documentation: http://localhost:8000/docs
echo.
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000