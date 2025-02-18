import dotenv from "dotenv";
import connectDB from "./database/index.js";
import {app} from "./app.js";

dotenv.config({path: "../.env"});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    app.on("error", (error) => {
        console.log("Error : " + error);
        throw error;
    })
})
.catch((error) => {console.error("Error connecting to MongoDB: ", error);
})

// Export the app if needed elsewhere
export default app;