# Coffee Corner

**A web application for discovering and reviewing local cafes in Ontario, Canada.**

## Project Overview

"Coffee Corner" is a web application designed to help users explore cafes and share their experiences through reviews. This repository contains the backend implementation using **NestJS** and **MongoDB**, alongside the frontend built with HTML, CSS, and JavaScript.  

Key features include:  
- RESTful API services for cafe and review management.
- Secure authentication with JWT.
- Role-based access control for different user types.

---

## API Endpoints

### Public Endpoints
| Endpoint                   | Method | Description                          |
|----------------------------|--------|--------------------------------------|
| `/cafes`                   | GET    | Retrieve a list of all cafes         |
| `/cafes/:id`               | GET    | Retrieve details of a specific cafe  |
| `/cafes/:cafeId/reviews`   | GET    | Retrieve all reviews for a specific cafe |

### Protected Endpoints (Require Authentication)
| Endpoint                   | Method | Role Required   | Description                          |
|----------------------------|--------|-----------------|--------------------------------------|
| `/cafes`                   | POST   | Manager         | Add a new cafe                       |
| `/cafes/:cafeId/reviews`   | POST   | Regular User    | Submit a review for a cafe           |
| `/auth/login`              | POST   | N/A             | User login to receive a JWT token    |

---

## Project Structure

### Backend
- **Framework:** NestJS
- **Database:** MongoDB (connected via Mongoose)
- **Authentication:** JWT and bcrypt for secure user management.

### Frontend
- **Technologies:** HTML, CSS, JavaScript

---
