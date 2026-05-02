import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import { validateEnv } from "./utils/validateEnv.js";
import dns from "node:dns/promises";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();
validateEnv();
connectDB();

// Only run app.listen if NOT on Vercel (for local development)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export the app for Vercel
export default app;