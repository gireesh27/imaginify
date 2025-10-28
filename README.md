# Imaginify – AI-Powered Image SaaS Platform

Imaginify is a modern **AI SaaS web application** that empowers users to enhance, transform, and manage images seamlessly.  
---

## 🚀 Features

### 🔹 AI Image Transformations (Powered by Cloudinary)
- **AI Background Removal:** Automatically removes image backgrounds using Cloudinary’s AI APIs.  
- **AI Auto Tagging:** Detects and labels key objects, scenes, or themes in uploaded images.  
- **AI Image Enhancement:** Enhances image clarity, lighting, and tone using AI-based optimization.  

### 🔹 Authentication & Authorization
- Secure and easy login/signup using **Clerk** authentication.
- User-specific dashboards for managing uploaded and transformed images.

### 🔹 Data Storage
- **MongoDB** is used as the primary database to store user profiles, image metadata, and transformation logs.

### 🔹 Modern Tech Stack
- Built with **Next.js 14 (App Router)** for fast, server-rendered pages.
- **TypeScript** for type safety and maintainability.
- **Tailwind CSS** for responsive UI and consistent styling.

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js** | Frontend framework with server-side rendering |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling and responsive design |
| **Cloudinary API** | Image upload, transformation, and AI features |
| **Clerk** | Authentication and user management |
| **MongoDB Atlas** | Database for storing user and image data |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/imaginify.git
cd imaginify
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Add environment variables

Create a `.env.local` file and add the credentials listed above.

### 4️⃣ Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📁 Folder Structure

```
imaginify/
│
├── app/
│   ├── dashboard/
│   ├── auth/
│   └── page.tsx
│
├── components/
│   ├── ImageUploader.tsx
│   ├── TransformCard.tsx
│   └── Navbar.tsx
│
├── lib/
│   ├── cloudinary.ts
│   ├── mongodb.ts
│   └── utils.ts
│
├── public/
│
└── .env.local
```

---

## 💡 How It Works

1. **Upload an Image:** Users upload images directly via the Cloudinary API.
2. **Apply AI Transformations:** Select transformations like background removal, tagging, or enhancement.
3. **View Results:** Transformed images are displayed instantly with options to download or re-edit.
4. **Save to Dashboard:** Each transformation is saved in MongoDB for easy user access later.

---

## 🧩 Future Enhancements

* Batch image transformations
* AI-powered style transfer
* Custom watermarking and branding
* Integration with Stripe for premium features

---

## 🧑‍💻 Author

**Gireesh Kasa**
B.Tech – NIT Warangal
[Portfolio](#) • [LinkedIn](#) • [GitHub](#)

---

## 🪪 License

This project is licensed under the **MIT License** — free to use and modify.

---

### ⭐ If you like this project, give it a star on GitHub!

```

