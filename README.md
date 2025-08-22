# 🛒 NextMart: A Next.js E-commerce Application

**NextMart** is a modern, full-stack e-commerce web application built with **Next.js 15 (App Router)** and **MongoDB**.  
It provides a smooth shopping experience with public product browsing and a protected dashboard for authenticated users to manage their products.  
Authentication is handled securely using **NextAuth.js**.

---

## 🚀 Features

- ✅ User Authentication (Register, Login, Logout) with **NextAuth.js**
- ✅ Secure Password Hashing using **bcrypt**
- ✅ Public product browsing
- ✅ Product details page
- ✅ User dashboard for product management
- ✅ Add and manage user-specific products
- ✅ Responsive and modern UI with Tailwind CSS & DaisyUI
- ✅ Dark/Light theme toggle

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS, DaisyUI  
- **Backend:** Next.js API Routes  
- **Database:** MongoDB  
- **Authentication:** NextAuth.js (JWT & Credentials Provider)  
- **Deployment:** Vercel  

---


##  Clone the Repository
```bash
git clone https://github.com/mdalrasel/NextMart.git
cd NextMart

---

## Install Dependencies
npm install
# or
yarn install
# or
pnpm install

---
## Set Up Environment Variables

NEXT_PUBLIC_MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority"
DB_NAME="<your-database-name>"

# NextAuth Configuration
NEXTAUTH_SECRET="<your-secret-key>"
NEXTAUTH_URL="http://localhost:3000"

#  Live Demo & Repository
🌐 Live Demo: https://next-mart-eight.vercel.app/

📂 Repository: https://github.com/mdalrasel/NextMart