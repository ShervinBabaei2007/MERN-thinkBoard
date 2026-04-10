# 📝 ThinkBoard

**ThinkBoard** is a streamlined, full-stack notes management application built with the MERN stack. It focuses on a clean, distraction-free user experience with robust backend logic to handle data persistence and real-time state updates.

---

## 🚀 Key Features

* **Full CRUD Functionality:** Create, read, update, and delete notes with instant UI feedback.
* **Smart Validation:** Integrated frontend and backend validation to ensure data integrity (e.g., preventing empty submissions).
* **Toast Notifications:** Real-time success and error alerts for a smooth, responsive user experience.
* **Responsive Dark UI:** A minimalist design optimized for focus, utilizing a custom dark theme.

## 🛠️ Technical Stack

* **Frontend:** React
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose)
* **Styling:** Tailwind CSS

---

## ⚙️ Getting Started

Follow these steps to get the project running locally on your machine.

### 1. Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/)

---

### 2. Environment Variables Setup (Critical)

To run this project locally, you need to set up free databases on MongoDB Atlas and Upstash Redis. Follow these steps to get your connection strings.

### 🟢 Getting your `MONGO_URI` (MongoDB Atlas)

1. **Create an account:** Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up for a free account.
2. **Deploy a Database:** * Click **Build a Database**.
   * Select the **M0 Free** cluster type.
   * Choose your preferred cloud provider and region, then click **Create**.
3. **Set up Database Access (Username/Password):**
   * In the Quickstart menu, create a database user.
   * Enter a username and an auto-generated password. **Save this password somewhere safe!** You will need it for your URI.
4. **Set up Network Access:**
   * Under "Where would you like to connect from?", select **My Local Environment**.
   * Click **Add My Current IP Address**. *(Note: If you work from a laptop in different locations, you may need to come back here and change this to `0.0.0.0/0` to allow access from anywhere).*
   * Click **Finish and Close**.
5. **Get your Connection String:**
   * Go to your **Database** dashboard and click the **Connect** button next to your cluster.
   * Select **Drivers** (Node.js).
   * Copy the connection string provided.
6. **Add to `.env`:**
   * Paste this string into your `/backend/.env` file as `MONGO_URI`.
   * **Crucial:** Replace `<username>` and `<password>` with your credentials.
   * **Important:** Add `thinkboard` right after the `.net/` and before the `?` so your database is named correctly.

### 🔴 Getting your `UPSTASH` Credentials (Redis)

1. **Create an account:** Go to [Upstash Console](https://console.upstash.com/) and log in (using GitHub or Google is easiest).
2. **Create a Database:**
   * Click the **Create Database** button.
   * Name it something like `thinkboard-cache`.
   * Select the **Global** or local region closest to you.
   * Ensure **TLS (REST API)** is enabled, and click **Create**.
3. **Find your REST API Credentials:**
   * Once the database is created, scroll down the details page until you find the **REST API** section.
4. **Add to `.env`:**
   * Copy the **UPSTASH_REDIS_REST_URL** and paste it into your `/backend/.env` file.
   * Click the "copy" icon next to the hidden token to copy the **UPSTASH_REDIS_REST_TOKEN** and paste it into your `.env` file.

### ✅ Final Verification

Your `/backend/.env` file should now look exactly like this (with your real values inserted):

```env
PORT=5000
MONGO_URI=mongodb+srv://sheep:mySecretPassword123@cluster0.abcde.mongodb.net/thinkboard?retryWrites=true&w=majority

UPSTASH_REDIS_REST_URL=https://helpful-panda-31415.upstash.io

UPSTASH_REDIS_REST_TOKEN=AYZzASQgNWM...
```

```
From your terminal in the root folder, run this command to install all dependencies:

npm run install-all

Then, to start both the Backend and Frontend simultaneously:

npm run dev
```

### 📸 Project Preview

<p align="center">
  <img src="assets/image1.png" alt="Image1" width="48%" />
  <img src="assets/image2.png" alt="Image2" width="48%" />
</p>
<p align="center">
  <img src="assets/image3.png" alt="Image3" width="48%" />
  <img src="assets/image4.png" alt="Image4" width="48%" />
</p>

---

### 🧠 Lessons Learned & Technical Growth

Building ThinkBoard was an important project in my growth as a full-stack developer. Moving beyond basic guided tutorials, this build challenged me to truly understand the architecture of the MERN stack-specifically how data flows from a MongoDB database, through an Express API, and into a dynamic React interface.

Here are my biggest takeaways:

* **State Management & Data Flow:** My biggest technical challenge was keeping the React UI in sync with the database without triggering unnecessary component re-renders. It forced me to think critically about when to fetch data, how to manage local state vs. server state, and how to structure my API payloads efficiently.
* **Designing for the User:** I realized early on that a good application doesn't just work; it needs to communicate. Implementing robust validation and real-time toast notifications shifted my mindset from just "making the code work" to handling edge cases. I learned the importance of ensuring the user is never left guessing whether an action failed or succeeded.
* **The "Full-Stack" Mindset:** Troubleshooting CORS issues, managing environment variables securely, and connecting a caching layer taught me to look at the application as one unified system rather than isolated frontend and backend environments.

This project gave me the confidence to build strong, user-centered applications and taught me how to debug some complex issues across the entire stack.
