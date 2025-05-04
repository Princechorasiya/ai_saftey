


# AI Safety Incident Log API  
Helping track and manage AI-related incidents—because responsible AI matters.  

## Why This Exists  
This API is designed to log and monitor hypothetical AI safety incidents. It is  a centralized place to record cases where AI systems might go wrong—whether it’s misinformation, bias, or unintended consequences.  

## What’s Under the Hood?  
This uses a solid tech stack that balances performance, flexibility, and reliability:  

- 🛠 Node.js (Express framework) — The backbone of the API  
- 📌 TypeScript — Adds type safety and keeps things clean  
- 🗄 MongoDB (via Mongoose) — Stores incident reports  
- 🔐 dotenv — Manages configuration without exposing secrets  

## Getting Started  
Ready to get this running? Here’s how:  

### 1️⃣ Clone the Repository  
```bash
git clone <repository-url>
cd ai-safety-incident-api
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Configure Environment Variables  
- Create a `.env` file in the project root.  
- Add your MongoDB connection string:  
  ```bash
  MONGO_URI=<your_mongodb_connection_string>
  PORT=3000
  ```

### 4️⃣ Build the Code  
This compiles the TypeScript into JavaScript for execution.  
```bash
npm run build
```

### 5️⃣ Seed the Database (Optional)  
Want some test data? Run the seeding script to populate the database with example incidents.  
```bash
npx ts-node src/config/seed.ts
```

### 6️⃣ Start the Server  
Fire up the API locally!  

- Development mode:  
  ```bash
  npm run dev
  ```  

- Production mode:  
  ```bash
  npm run build
  npm start
  ```
now the server is running upon the port 3000
---

## Database Setup  
 

### Using MongoDB Atlas (Cloud Database)  
- Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
- Create a cluster and copy your connection string  
- Update your `.env` file:  
  ```bash
  MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
  ```  

---

## API Endpoints (How to Use It)  


### 🟢 GET /incidents  
- Retrieve all incidents in the database  
- Example call:  
  ```bash
  curl -X GET http://localhost:3000/incidents
  ```

### 🔵 GET /incidents/:id  
- Fetch a single incident by its unique ID  
- Example call:  
  ```bash
  curl -X GET http://localhost:3000/incidents/60d21b4667d0d8992e610c85
  ```

### 🟡 POST /incidents  
- Create a new incident with title, description, and severity level  
- Example request (JSON body):  
  ```bash
  curl -X POST http://localhost:3000/incidents \
    -H "Content-Type: application/json" \
    -d '{"title":"AI Bias","description":"Algorithm disproportionately recommends biased results","severity":"Medium"}'
  ```

### 🔴 DELETE /incidents/:id  
- Remove an incident from the records  
- Example call:  
  ```bash
  curl -X DELETE http://localhost:3000/incidents/60d21b4667d0d8992e610c85
  ```

---

## Testing with Postman  
Post man api endpoints:
IMPORT THEM FROM THE .jON FILE NAMED ai_saftey.postman_collection
---


