# User Management Fullstack App

A full-stack **user** management web application that provides complete CRUD (Create, Read, Update, Delete) operations for managing users.

## Features

- Add new users with details such as name, email, and role.  
- View a paginated list of all users.  
- Edit and update existing user information.  
- Delete users from the system.  
- Basic form validation and error messages.

## Tech Stack

- **Frontend**: React / Vue / Angular (update as per your project)  
- **Backend**: Node.js + Express / Spring Boot / Django (update as per your project)  
- **Database**: MySQL / PostgreSQL / MongoDB (update as per your project)  
- **Other**: Axios / Fetch API for HTTP requests, dotenv for environment variables.

## Project Structure

```text
root/
  frontend/        # Frontend application
  backend/         # Backend API
  README.md
```

_Update this section to reflect your actual folder structure._

## Prerequisites

- Node.js and npm installed  
- Database server running (MySQL/PostgreSQL/MongoDB, etc.)  
- Git installed (optional but recommended)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/User-management-fullstackapp.git
cd User-management-fullstackapp
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=user_management
```

_Run migrations or create tables as required._

Start the backend server:

```bash
npm run dev   # or npm start, or mvn spring-boot:run, etc.
```

### 3. Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev    # or npm start
```

The frontend will usually run on `http://localhost:3000` (or as configured), and it will call the backend API running on another port (for example, `http://localhost:5000`).

## API Endpoints

Update this section to match your backend:

- `GET /api/users` – Get all users  
- `GET /api/users/:id` – Get a single user  
- `POST /api/users` – Create a new user  
- `PUT /api/users/:id` – Update an existing user  
- `DELETE /api/users/:id` – Delete a user

## Screenshots
# Working
<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/7a9a3ce0-b717-4431-98c5-ee201aab13d8" />

# Frontend:
<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/486e3b38-ccef-4466-9b2f-2b5cdeaff614" />

# MongoDB [Hashed passwords]
<img width="2880" height="935" alt="image" src="https://github.com/user-attachments/assets/6e5b055e-8710-40d1-8adc-ff97eb68ec80" />


## Future Improvements

- User authentication and authorization (login, roles, permissions).  
- Search and filter users.  
- Pagination and sorting on the list page.  
- Better UI/UX with a component library (Material UI, Tailwind, etc.).
