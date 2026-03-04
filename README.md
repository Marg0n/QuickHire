# 🚀 QuickHire - Simple Job Board Application

**QuickHire** is a modern, responsive job board application built with **Next.js** and **Node.js**. This project allows users to browse job listings, filter by category or location, and apply for positions seamlessly. It also includes an Admin Panel for managing job posts.

---

## 🎨 UI Design
The interface is meticulously crafted based on the [Figma Design Template](https://www.figma.com). 
- **Typography & Colors:** Followed strictly as per design specs.
- **Responsiveness:** Fully optimized for Mobile, and Desktop.

---

## ✨ Key Features

### 💻 Frontend (Next.js)
- **Job Listings Page:** Real-time search and filtering by category/location.
- **Job Detail Page:** Detailed job descriptions with an integrated "Apply Now" form.
- **Admin View:** Dedicated dashboard to add and delete job listings.
- **Form Validation:** Client-side validation for email formats and required fields.

### ⚙️ Backend (Node.js & Express)
- **RESTful API:** Clean and modular API endpoints.
- **Database:** Data persistence using MongoDB (Mongoose).
- **Validation:** Server-side input validation to ensure data integrity.

---

## 🛠️ Tech Stack
- **Frontend:** Next.js, Tailwind CSS, React Icons (Icons).
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB.
- **State Management:** React Hooks (useState, useEffect).

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Marg0n/QuickHire.git
cd QuickHire
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a .env file in the server folder:
```text
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the server:
```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
```

Create a .env.local file in the client folder:
```text
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the frontend:
```bash
npm run dev
```

### 🔗 API Endpoints


| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/jobs` | Fetch all job listings |
| **GET** | `/api/jobs/:id` | Get single job details |
| **POST** | `/api/jobs` | Create a new job (Admin) |
| **DELETE** | `/api/jobs/:id` | Delete a job (Admin) |
| **POST** | `/api/applications` | Submit a job application |


### 📂 Project Structure
```text
├── client/             # Next.js Application
│   ├── components/     # Reusable UI Components
│   ├── app/            # App Router (Pages)
│   └── public/         # Static Assets
├── server/             # Express API
│   ├── models/         # Database Schemas
│   ├── routes/         # API Routes
│   └── controllers/    # Request Logic
└── README.md
```

### 🎥 Submission Links
- **Live**: [Insert Live Link Here]
- **Video Walkthrough** (Loom): [Insert Loom Link Here]