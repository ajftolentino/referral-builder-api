# Referral Builder API

This is the backend API for the Referral Builder application. It is built with **Node.js** and **Express**, using **MongoDB Atlas** as the database.

## 🚀 Getting Started

Follow these steps to set up and run the API locally:

### **1. Install Dependencies**

```sh
npm install
```

### **2. Create an `.env` File**

Copy the contents of `.env.example` into a new `.env` file:

```sh
touch .env
```

Edit `.env` and configure the necessary environment variables.

### **3. Set Up MongoDB Atlas**

- Create a **MongoDB Atlas** account.
- Set up a new **database** named `referral_builder`.
- Inside the database, create a **collection** named `referrals`.

### **4. Configure the Server**

- Specify the port as **5000**.
- Add your **MongoDB Atlas connection string** to the `.env` file:
  ```sh
  MONGO_DB_CONNECTION_STRING=<your-mongodb-connection-string>
  PORT=5000
  ```

### **5. Start the Server**

```sh
npm run dev
```

This will start the server and listen for requests on port **5000**.

### **6. Update Frontend API URL**

Edit **Referral Builder's** `.env` file and set the `API_URL` to match the backend URL:

```sh
API_URL=http://localhost:5000/
```

### **7. Open the App in Your Browser**

Go to:

```
http://localhost:3001
```

This will load the frontend, which communicates with your backend API.

---

## 📜 License

This project is licensed under the **MIT License**.

---

For any issues, feel free to open a ticket or reach out to the maintainers. 🚀
