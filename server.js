//configuring dotenv package
const env = require("dotenv").config();

const express = require("express");
const morgan = require('morgan')
const { connectToDatabase } = require("./dbconfig/db.config");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");

const app = express();
const PORT = 5000 || process.env.DEV_PORT;

//connecting with database
connectToDatabase();

app.use(express.json());

// Middleware
app.use(morgan('Method::method Url::url Status::status Response::res[content-length] - ResponseTime::response-time ms'));
  // Log incoming requests in development mode

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
