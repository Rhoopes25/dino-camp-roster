# 🦕 Dino Discovery Camp Roster

A full stack web application for managing camper usernames for Dino Discovery Camp Summer 2026. Camp administrators can view enrolled campers and update their usernames, which are persisted to a PostgreSQL database.

---

## Prerequisites

Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/) (v18+)
- [PostgreSQL](https://www.postgresql.org/) (v17)
- [npm](https://www.npmjs.com/)

---

## Project Structure
```
dino-camp-roster/
├── backend/
│   ├── db/
│   │   ├── index.js        # PostgreSQL connection pool
│   │   ├── schema.sql      # Database table definitions
│   │   └── seed.sql        # Sample camper data
│   ├── .env.example        # Environment variable template
│   ├── package.json
│   └── server.js           # Express server and API routes
└── frontend/
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # Page components
    │   └── App.tsx
    ├── index.html
    └── package.json
```

---

## Database Setup

1. Make sure PostgreSQL is running on your machine.

2. Create the database:
```bash
psql -U postgres -c "CREATE DATABASE dinocamp;"
```

3. Run the schema to create the users table:
```bash
psql -U postgres -d dinocamp -f backend/db/schema.sql
```

4. Seed the database with sample campers:
```bash
psql -U postgres -d dinocamp -f backend/db/seed.sql
```

---

## Installation Steps

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

---

## Configuration

1. In the `backend` folder, create a `.env` file using the provided template:
```bash
cp .env.example .env
```

2. Fill in your PostgreSQL credentials in `.env`:
```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=dinocamp
DB_PASSWORD=yourpassword
DB_PORT=5432
PORT=3000
```

---

## How to Run

You will need two terminal windows open simultaneously.

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
The server will start on `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
The app will open on `http://localhost:8080`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Fetch all campers |
| PUT | `/api/users/:id` | Update a camper's username |

### Example Response - GET `/api/users`
```json
[
  { "id": 1, "name": "Maya Johnson", "username": "VelociMaya", "email": "maya@example.com", "emoji": "🦕" },
  { "id": 2, "name": "Liam Chen", "username": "TriceraLiam", "email": "liam@example.com", "emoji": "🦖" }
]
```

### Example Request - PUT `/api/users/1`
```json
{ "username": "NewUsername" }
```