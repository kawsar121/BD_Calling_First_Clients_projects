# KB Cosmetics Products Shop

An **e-commerce website** for buying and selling cosmetics products. Built with **React**, **Tailwind CSS**, **React Router**, and **Node.js / Express / MongoDB** for the backend. Features include:

- Product listings with images, categories, and prices
- Category filter sidebar
- User dashboard and shopping cart
- Admin dashboard to manage products, orders, and users
- Secure JWT authentication
- Payment handling with bKash integration
- Email notifications for orders and confirmations

---

## Features

### User Side
- Browse products by categories
- View product details
- Add to cart and place orders
- Secure login & signup
- Responsive design for desktop and mobile

### Admin Side
- Manage products (Add, Update, Delete)
- View all orders and update order status
- Manage users
- Send email notifications automatically
- Secure admin routes with JWT authentication

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth / JWT
- **Email:** Nodemailer (for order notifications)

---

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/kawsar121/BD_Calling_First_Clients_projects.git

Install dependencies:

cd kb-cosmetics-shop
npm install

Setup .env file for backend:

PORT=5000
DBUSER=your_mongodb_username
DBPASS=your_mongodb_password
JWTTOKEN=your_jwt_secret
EMAIL=your_email@gmail.com
EMAIL_PASS=your_email_password

Run the backend server:

npm run server

Run the frontend:

npm run dev

Open http://localhost:5173
 in your browser.

Project Structure
kb-cosmetics-shop/
├─ frontend/
├─ backend/
├─ README.md
Author

Tohidul Islam Kawsar Bhuiyan

Email: developerkawsar14@gmail.com

Live link : https://kb-cosmetics-products.netlify.app/