# CI/CD Node App - GitHub Actions & Docker

**Author:** Vaishnavi Chikhale  
**Date:** 2025-10-27

---

## Description
This is a Node.js application with a basic CI/CD pipeline using **GitHub Actions** and **Docker**.  
The pipeline automatically builds, tests, and pushes the Docker image to Docker Hub.

---

## Objective
Set up a basic CI/CD pipeline to automate the process of building, testing, and deploying a Node.js application locally.

---

## Tools
- Node.js
- Jest
- Docker
- Docker Hub
- GitHub Actions
- VS Code / Local Machine

---

## What I Did
- Created a simple Node.js app (`app.js`) with Express.  
- Wrote unit tests using Jest (`tests/app.test.js`).  
- Created a `Dockerfile` and `docker-compose.yml` to containerize the app.  
- Pushed the app to GitHub repository (`ci-cd-node-app`).  
- Configured GitHub Actions workflow:  
  - Install dependencies → Run tests → Build Docker image → Push to Docker Hub.  
- Added GitHub Secrets for Docker Hub login (`DOCKERHUB_USERNAME` & `DOCKERHUB_TOKEN`).  
- Pulled Docker image locally to verify deployment.  

