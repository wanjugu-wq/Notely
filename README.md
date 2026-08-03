# Notely — Modern Note Taking & Workspace Application

![Notely Banner](./public/documents.png)

## Overview

**Notely** is a modern full-stack note-taking and document management application inspired by tools like Notion.

The application allows users to create, organize, edit, archive, restore, and manage documents inside a personal workspace. It provides a clean and responsive interface focused on productivity, organization, and an enjoyable writing experience.

The project was built with a modern frontend stack using **React, Vite, Tailwind CSS, Shadcn UI, and BlockNote**, with a Flask REST API backend handling authentication, database operations, and document management.

---

# Features

## Authentication

- User registration
- User login
- JWT-based authentication
- Protected routes
- Persistent user sessions
- Logout functionality

---

## Workspace & Documents

Users can:

- Create new notes
- Edit document titles
- Edit document content
- Add icons/emojis to documents
- Add cover images
- Organize documents in a nested tree structure
- Create child pages
- Archive documents
- Restore archived documents
- Permanently delete documents

---

## Rich Text Editing

Notely uses **BlockNote** for a modern writing experience.

Features include:

- Block-based editing
- Rich text formatting
- Headings
- Lists
- Checkboxes
- Code blocks
- Media support
- Slash commands

---

## Sidebar Navigation

The sidebar provides:

- Workspace document tree
- Expand/collapse nested pages
- Active document highlighting
- Quick document creation
- Document actions menu

---

## Trash Management

Users can:

- Move documents to trash
- View archived documents
- Restore documents
- Permanently delete documents

---

## Publishing

Documents can be published and viewed through public preview routes.

---

# Tech Stack

## Frontend

### Core

- **React**
- **Vite**
- **JavaScript (JSX)**
- **React Router**
- **Tailwind CSS**

---

### UI & Styling

- **Tailwind CSS**
  Utility-first CSS framework used for responsive styling.

- **Shadcn UI**
  Accessible and customizable UI components built with Radix UI and Tailwind.

- **Radix UI**
  Used for accessible primitives including:
  - Dropdown menus
  - Dialogs
  - Popovers
  - Alerts

- **Lucide React**
  Icon library used throughout the application.

---

### Editor

- **BlockNote**

A block-based rich text editor used to create a Notion-like writing experience.

---

### State & Utilities

- **Axios**

Used for communication between the React frontend and Flask REST API.

- **Zustand**

Used for lightweight client-side state management.

- **Sonner**

Used for beautiful toast notifications.

- **React Hook utilities**

Custom hooks are used for reusable application logic.

---

# Backend

The backend is built with:

- **Python**
- **Flask**
- **Flask REST API**
- **SQLAlchemy**
- **Flask-JWT-Extended**
- **Marshmallow**

---

## Backend Responsibilities

The API handles:

- User authentication
- JWT token generation
- User management
- Workspace creation
- Document CRUD operations
- Document ownership validation
- Archive and restore functionality
- Search functionality

---

# Database

The application uses a relational database structure.

Main models:

## User

Stores:

- Username
- Email
- Password hash

---

## Workspace

Stores:

- Workspace name
- Owner relationship

---

## Document

Stores:

- Title
- Content
- Icon
- Cover image
- Parent document relationship
- Workspace relationship
- Owner relationship
- Archive status
- Publish status
- Timestamps

---

# Project Structure

```
src/
│
├── App.jsx
├── main.jsx
├── index.css
│
├── pages/
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── DocumentsPage.jsx
│   ├── PreviewPage.jsx
│   └── NotFoundPage.jsx
│
├── layouts/
│   ├── MarketingLayout.jsx
│   ├── MainLayout.jsx
│   └── PublicLayout.jsx
│
├── components/
│   ├── auth/
│   ├── documents/
│   ├── marketing/
│   ├── preview/
│   ├── providers/
│   └── ui/
│
├── services/
│   ├── api.js
│   ├── auth.js
│   └── documents.js
│
├── hooks/
│
├── lib/
│
└── assets/
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>

cd notely
```

---

# Frontend Setup

Navigate into the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

# Backend Setup

Navigate into the backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create environment variables:

```
DATABASE_URL=
JWT_SECRET_KEY=
```

Run Flask server:

```bash
flask run
```

Backend runs on:

```
http://127.0.0.1:5000
```

---

# Environment Variables

## Frontend

Create:

```
.env
```

Example:

```env
VITE_API_URL=http://127.0.0.1:5000
```

---

## Backend

Example:

```env
DATABASE_URL=your_database_url
JWT_SECRET_KEY=your_secret_key
```

---

# API Endpoints

## Authentication

### Register

```
POST /register
```

### Login

```
POST /login
```

### Current User

```
GET /me
```

---

## Documents

### Get Documents

```
GET /documents
```

### Create Document

```
POST /documents
```

### Get Single Document

```
GET /documents/:id
```

### Update Document

```
PATCH /documents/:id
```

### Delete Document

```
DELETE /documents/:id
```

### Trash

```
GET /documents/trash
```

### Restore Document

```
PATCH /documents/:id/restore
```

---

# Deployment

## Frontend

The React/Vite frontend can be deployed using:

- Vercel
- Netlify
- Cloudflare Pages

Build command:

```bash
npm run build
```

---

## Backend

The Flask API can be deployed using:

- Vercel
- Render
- Railway
- Fly.io

---

# Development Highlights

This project demonstrates:

- Full-stack application development
- REST API design
- JWT authentication
- Database relationships
- CRUD operations
- Responsive UI development
- Component-based architecture
- Modern React practices
- API integration
- State management
- Rich text editing implementation

---

# Future Improvements

Possible improvements:

- Real-time collaboration
- File attachments
- Sharing permissions
- Workspace invitations
- Advanced search
- Version history
- Dark/light theme improvements
- AI writing assistance

---

# Contributors

Developed as a full-stack learning project focusing on modern frontend development and backend API integration.

---

## License

This project is for educational and portfolio purposes.
