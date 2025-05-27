@echo off
rem git init -- Commented out as this is usually a one-time setup command

echo Adding all changes...
git add .
if %errorlevel% neq 0 (
    echo Error adding changes.
    pause
    exit /b 1
)

echo.
echo Enter commit message:
set /p commit_message="Commit message: "

echo.
echo Committing changes...
git commit -m "%commit_message%"
rem Check if commit was successful or if there was nothing to commit
if %errorlevel% neq 0 (
    rem Check if there was nothing to commit (exit code 0 but specific message)
    git status --porcelain | findstr /R "^\?\?" >nul
    if %errorlevel% neq 0 (
        echo No changes to commit. Skipping pull and push.
        pause
        exit /b 0
    )
    echo Error during commit.
    pause
    exit /b 1
)

rem The following remote commands are usually one-time setup.
rem Keeping them as they were in the provided script, but they might cause errors if the remote already exists.
rem A more robust script would check if the remote exists first.
git branch -M main
git remote add origin https://github.com/99zarka/meras.git >nul 2>&1
git remote set-url origin https://github.com/99zarka/meras.git

echo.
echo Pulling latest changes from remote...
git pull origin main
if %errorlevel% neq 0 (
    echo Error during pull. You might have merge conflicts. Resolve them manually and run the script again.
    pause
    exit /b 1
)

echo.
echo Pushing changes to remote repository...
git push -u origin main
if %errorlevel% neq 0 (
    echo Error pushing changes after pull.
    pause
    exit /b 1
)

echo.
echo Git operations complete.
pause