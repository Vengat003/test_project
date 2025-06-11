import 'dotenv/config'
import express from "express";
import cors from "cors"; 

// Create express app
const app = express(); 

// app.use(requireAuth()) 

// Use express json middleware to parse json bodies
app.use(express.json()); 
app.use(cors());
export const PORT = process.env.PORT || 4002; 


// Start server on port 5000 and log message to console
app.listen(PORT, async () => {
  console.log("Server is running on port " ,PORT);
});

app.get("/check", (req,res) =>{ 
  res.send("SUCESS");
});
 



export default app;
