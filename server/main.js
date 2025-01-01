import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import errorHandling from "./middleware/errorHandle.js";

import router from "../server/routes/userRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes

app.use("/api", router);

app.use(errorHandling);



app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`the database name is: ${result.rows[0].current_database}`);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
