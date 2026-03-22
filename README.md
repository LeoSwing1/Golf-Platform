🚀 Golf Platform – Monthly Draw System

A full-stack web application that simulates a score-based reward draw system, where users participate using their performance scores and win prizes based on matching randomly generated draw numbers.

📌 Overview

The platform generates random draw numbers, compares them with user scores, and determines winners based on match count. It also calculates a dynamic prize pool and distributes rewards across different winning tiers.

This project demonstrates real-world business logic, backend architecture, and frontend integration.

🎯 Features
🎲 Random draw number generation
⛳ Score-based matching system
🏆 Winner classification:
5 Matches → Jackpot
4 Matches → Tier 2
3 Matches → Tier 3
💰 Dynamic prize pool distribution
📊 Real-time dashboard UI
🔗 API integration with frontend
🛠️ Tech Stack
🔹 Frontend
Next.js (App Router)
React
Tailwind CSS
Axios
🔹 Backend
Node.js
Express.js
🔹 Database
PostgreSQL (Supabase)
🏗️ Project Structure
golfplatform/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── config/
│   └── server.js
│
├── client/
│   ├── app/
│   ├── public/
│   └── package.json
🔗 API Endpoint
🎲 Run Draw
GET /api/draw/run
📊 Sample Response
{
  "drawNumbers": [36, 29, 27, 14, 19],
  "totalUsers": 1,
  "totalPool": 100,
  "results": [
    {
      "userId": 1,
      "matches": 0,
      "category": "No Win"
    }
  ]
}
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/golf-platform.git
cd golf-platform
2️⃣ Backend Setup
cd server
npm install

Create .env file:

PORT=5001
JWT_SECRET=your_secret
DATABASE_URL=your_supabase_connection_string

Run backend:

npm run dev
3️⃣ Frontend Setup
cd client
npm install

Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:5001

Run frontend:

npm run dev
🌐 Usage

Open backend API:

http://localhost:5001/api/draw/run

Open frontend:

http://localhost:3000
⚡ System Workflow
User scores stored in database
API generates random draw numbers
Scores are matched against draw
Winners are categorized
Prize pool is calculated
Results displayed on dashboard
💡 Key Highlights
Full-stack architecture
Real-world business logic implementation
API-driven system
Database integration with Supabase
Debugged real issues (CORS, ENV, networking)
🚀 Future Improvements
🔐 User authentication (JWT)
📊 Leaderboard system
🧾 Draw history tracking
🛠️ Admin dashboard
⏱️ Scheduled automated draws
💳 Payment integration
👨‍💻 Author

Leo Swing
Full Stack Developer

⭐ Support

If you like this project, give it a ⭐ on GitHub!
