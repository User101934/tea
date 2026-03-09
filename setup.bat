@echo off
SETLOCAL EnableDelayedExpansion

echo Checking for package manager...

where bun >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Bun found. Installing dependencies with bun...
    bun install
) else (
    where npm >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo Bun not found. Using npm to install dependencies...
        npm install
    ) else (
        echo Error: Neither bun nor npm found. Please install Node.js or Bun.
        pause
        exit /b 1
    )
)

echo.
echo Setup complete^^! You can now run the app using run.bat.
pause
