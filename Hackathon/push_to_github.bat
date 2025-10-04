@echo off
echo ========================================
echo    FitLife Website - GitHub Upload
echo ========================================
echo.
echo This will help you upload your project to GitHub.
echo.
echo Step 1: Install Git for Windows
echo Please download and install Git from: https://git-scm.com/download/win
echo.
echo Step 2: After installing Git, run these commands:
echo.
echo git init
echo git add .
echo git commit -m "Initial commit: FitLife fitness website"
echo git branch -M main
echo git remote add origin https://github.com/ayush1k8sharma-cloud/Hackathon-Project.git
echo git push -u origin main
echo.
echo Step 3: Alternative - Use GitHub Desktop
echo Download GitHub Desktop from: https://desktop.github.com/
echo Then add your repository and upload the files.
echo.
echo ========================================
echo Files ready for upload:
echo ========================================
dir /b *.html *.css *.js *.md *.bat
echo.
echo Images folder:
dir /b images\
echo.
echo ========================================
pause
