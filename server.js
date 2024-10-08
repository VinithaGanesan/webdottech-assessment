//configuring dotenv package
const env = require("dotenv").config();

const express = require("express");
const { connectToDatabase } = require("./dbconfig/db.config");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");

const app = express();
const PORT = 5000 || process.env.DEV_PORT;

//connecting with database
connectToDatabase();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
