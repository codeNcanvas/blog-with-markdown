# The Markdown

A full-stack MERN blog for publishing and managing Markdown stories. It includes a responsive reader experience, secure admin authentication, Markdown rendering, pagination, and a complete post-management dashboard.

## Features

### Reader experience

- Responsive editorial-style homepage
- Paginated collection of published stories
- Dedicated article pages with rich Markdown rendering
- Light and dark themes with saved preferences
- Accessible keyboard focus and reduced-motion support

### Admin experience

- JWT-based admin authentication
- Protected dashboard and editor routes
- Create, edit, and delete posts
- Markdown editor with category support
- Responsive post-management table

## Technology

- **Frontend:** React 19, Vite, React Router, Axios, React Markdown
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JSON Web Tokens and bcrypt

## Project structure

```text
project-blog/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── seed.js
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   ├── .env.example
│   └── vite.config.js
└── README.md
```

## Prerequisites

Install the following before starting:

- Node.js 20 or newer
- npm
- A local MongoDB installation or MongoDB Atlas database

## Local setup

### 1. Clone the repository

```bash
git clone https://github.com/codeNcanvas/blog-with-markdown.git
cd blog-with-markdown
```

### 2. Configure and run the backend

```bash
cd backend
npm install
```

Copy `backend/.env.example` to `backend/.env`, then replace the placeholder values:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
```

Start the API:

```bash
npm run dev
```

The API will run at `http://localhost:5000`.

### 3. Configure and run the frontend

Open a second terminal:

```bash
cd client
npm install
```

Copy `client/.env.example` to `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. Port 5000 serves only the API, not the website.

> Environment variable names exposed to Vite must begin with `VITE_`. Restart the frontend server after changing `.env`.

## Create the first admin

The seed script creates the initial admin account defined in `backend/seed.js`.

```bash
cd backend
node seed.js
```

For a public or production deployment, replace the default seed credentials before running this command.

## Available commands

Run these commands inside the relevant directory.

| Directory | Command | Purpose |
| --- | --- | --- |
| `client` | `npm run dev` | Start the frontend development server |
| `client` | `npm run build` | Create a production frontend build |
| `client` | `npm run lint` | Check frontend code quality |
| `client` | `npm run preview` | Preview the production build locally |
| `backend` | `npm run dev` | Start the API with automatic reload |
| `backend` | `npm start` | Start the API with Node.js |

## API routes

| Method | Route | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/auth/login` | Public | Authenticate an admin |
| `GET` | `/api/posts` | Public | Get paginated posts |
| `GET` | `/api/posts/:id` | Public | Get one post |
| `GET` | `/api/posts/category/:categoryName` | Public | Get posts by category |
| `POST` | `/api/posts` | Admin | Create a post |
| `PATCH` | `/api/posts/:id` | Admin | Update a post |
| `DELETE` | `/api/posts/:id` | Admin | Delete a post |

Protected routes require an authorization header:

```text
Authorization: Bearer <token>
```

## Production notes

- Use a strong, private `JWT_SECRET`.
- Never commit `.env` files or database credentials.
- Set `VITE_API_URL` to the deployed backend API URL before building the frontend.
- Restrict CORS to the deployed frontend origin.
- Replace the default credentials in `backend/seed.js`.

## License

This project is available under the ISC license.
