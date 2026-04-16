# 📝 MERN Blog with Markdown

A full-stack blog application built using the **MERN stack** that allows users to create, edit, and manage blog posts using Markdown.

---

## 🚀 Features

* ✍️ Create blog posts with Markdown support
* 📝 Edit existing posts
* 📄 View all posts in a dashboard
* 🔍 Fetch individual post details
* ⚡ Fast and responsive UI
* 🌐 RESTful API integration

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

```
PROJECT/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── .gitignore
```

---

 ⚙️ Installation & Setup

 1️⃣ Clone the repository

git clone "repo link"
cd blog-with-markdown


 2️⃣ Setup Backend


cd backend
npm install


Create a `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run dev
```

---
 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /posts     | Get all posts   |
| GET    | /posts/:id | Get single post |
| POST   | /posts     | Create post     |
| PATCH  | /posts/:id | Update post     |
| DELETE | /posts/:id | Delete post     |

---

## 🧠 Key Learnings

* REST API design using Express
* MongoDB CRUD operations with Mongoose
* React state management & routing
* Full-stack integration
* Error handling & validation

---

## 🤝 Contributing

Contributions are welcome! 

---


## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
