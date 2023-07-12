const express = require ('express');
const app = express();
const dotenv = require('dotenv')

const mongoose = require('mongoose')
const authRoute = require ("./routes/auth");
const usersRoute = require ("./routes/usersRouter");
 const hotelsRoute = require ("./routes/hotels");
const roomsRoute = require("./routes/rooms");
 const cookieParser = require ("cookie-parser");
const cors = require("cors")
app.use(express.json());
app.use(cors())
app.use(cookieParser())
dotenv.config();



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares




// app.use('/api', contactRoutes)
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Connected to backend.");
});