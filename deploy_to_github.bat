@echo off
echo Starte Git Deployment...

REM >>> GITHUB-USER KONFIGURATION
git config --global user.name "NextGenBrain"
git config --global user.email "nextgenbrainai@gmail.com"

REM >>> REPO-DATEN
set GITHUB_USERNAME=NextGenBrain
set REPO_NAME=collabsphere-landing

cd /d "C:\Users\toni0\OneDrive\Dokumente\Archiv WEB CollabSphere\CollabSphere_Landingpage_Complete"

git init
git remote remove origin
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main

pause
