# AI Recovery Companion - Backend

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Setup MongoDB
Make sure MongoDB is installed and running on your system.

**Windows:**
- Download MongoDB from https://www.mongodb.com/try/download/community
- Install and start MongoDB service

**Or use MongoDB Atlas (Cloud):**
- Create free account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string

### 3. Configure Environment Variables
```bash
cp .env.example .env
```

Edit `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/recovery_ai
JWT_SECRET=your_secure_random_string_here
NODE_ENV=development
```

### 4. Start the Server
```bash
npm run dev
```

Server will run on http://localhost:5000

## API Endpoints

### Authentication

**POST /api/auth/signup**
- Register new user
- Body: { name, email, password, phone, injuryType }

**POST /api/auth/login**
- Login user
- Body: { email, password, isCaretaker }

**GET /api/health**
- Health check endpoint

## Database Schema

### User Model
- name: String
- email: String (unique)
- password: String (hashed)
- phone: String
- injuryType: String
- role: String (patient/caretaker)
- createdAt: Date
