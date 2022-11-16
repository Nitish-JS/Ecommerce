const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const razorRoute = require("./routes/razorpay");

const cors = require("cors");
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", razorRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("server listening at port 8000");
});
