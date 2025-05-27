git init
git add .
echo.
echo Enter commit message:
set /p commit_message="Commit message: "
git commit -m "%commit_message%"
git branch -M main
git remote add origin https://github.com/99zarka/meras.git
git remote set-url origin https://github.com/99zarka/meras.git
git push -u origin main
pause