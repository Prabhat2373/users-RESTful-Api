const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const userRouter = require("./routes/userRoute");

app.use(express.json());

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
