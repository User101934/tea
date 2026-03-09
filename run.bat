@echo off
echo Starting the development server...

where bun >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Using bun...
    bun run dev -- --hostname 0.0.0.0
) else (
    echo Using npm...
    npm run dev -- --hostname 0.0.0.0
)
