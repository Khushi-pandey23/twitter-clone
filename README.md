# 🐦 Twitter Clone

This is a **Twitter Clone** 🐦 application built using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js). It replicates key features of Twitter like posting tweets, following users, liking tweets, and a dynamic feed. This project demonstrates modern web development skills like **authentication**, **state management**, and **RESTful API** design.

## ✨ Features

- 🔒 User Authentication (Sign Up, Log In, Log Out)
- 📝 Create and Delete Tweets
- 👥 Follow/Unfollow Users
- ❤️ Like/Unlike Tweets
- 📰 View Timeline/Feed of Tweets
- 🔔 Real-time Updates and Notifications
- 👤 User Profiles with Tweet History
- 📱 Responsive Design (for both desktop and mobile)

## 🛠️ Technologies Used

### Frontend:
- ⚛️ **React.js** with functional components
- 🔀 **React Router** for navigation
- 🌐 **Redux** (optional for state management)
- 🎨 **TailwindCSS** (or your chosen CSS framework) for styling

### Backend:
- 🟢 **Node.js** with **Express.js** framework
- 📦 **MongoDB** with **Mongoose** for database
- 🔐 **JWT (JSON Web Token)** for authentication
- 🔑 **Bcrypt** for password hashing

### Deployment:
- 🚀 **Frontend**: Hosted on Netlify/Vercel
- 🌍 **Backend**: Hosted on Heroku/Render
- 🗄️ **MongoDB**: Hosted on MongoDB Atlas

## 📸 Screenshots

---

---

## ⚙️ Installation and Setup

### Prerequisites

- **Node.js** (v14+)
- **MongoDB** (local or MongoDB Atlas)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Khushi-pandey23/twitter-clone.git
   cd twitter-clone/backend

2. Install backend dependencies:
   ```bash
   npm install

3. Create a .env file in the backend directory and add the following environment variables:
   ```bash
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret-key
  
4. Start the backend server:
   ```bash
   npm run dev

  The backend will run on http://localhost:5000.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend

2. Install frontend dependencies:  
  ```bash
  npm install
  ```
3. Start the frontend server:
   ```bash
   npm start
    ```
The frontend will run on http://localhost:3000.

## 🔗 API Endpoints

Here are some of the main API endpoints used in this project:

| Endpoint            | Method | Description                        |
| ------------------- | ------ | ---------------------------------- |
| `/api/auth/signup`  | POST   | Register a new user                |
| `/api/auth/login`   | POST   | Log in and get a JWT token         |
| `/api/tweets`       | GET    | Get all tweets (public feed)       |
| `/api/tweets`       | POST   | Create a new tweet                 |
| `/api/tweets/:id`   | DELETE | Delete a specific tweet by its ID  |
| `/api/users/:id`    | GET    | Get user profile information       |
| `/api/users/follow` | POST   | Follow/Unfollow another user       |

---

## 🚀 How It Works

1. **Authentication**: Users authenticate with JWT tokens. After logging in, a token is generated and stored by the client, allowing access to protected routes and actions like posting tweets.
2. **Tweets**: Users can create, edit, and delete their tweets. Tweets are stored in MongoDB and retrieved through the backend API.
3. **User Profiles**: Each user has a profile page, showing their bio, number of followers, and their tweet history.
4. **Follow System**: Users can follow/unfollow each other. The feed displays tweets from followed users.
5. **Likes**: Tweets can be liked/unliked, and the number of likes is updated dynamically.

---

## 🎯 Future Improvements

- 🔍 Add search functionality for tweets and users.
- 💬 Implement comments and retweets.
- ⚡ Add real-time notifications using WebSockets (e.g., new follower, tweet updates).
- 🖼️ Allow profile picture and bio editing.
- 🚀 Optimize backend API with caching strategies for faster performance.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, make your changes, and submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## ✉️ Contact

- **Author**: Khushi Pandey
- **GitHub**: [@Khushi-pandey23](https://github.com/Khushi-pandey23)
- **Email**: kp2284675@gmail.com
