const express = require("express");
const app = express();

require("dotenv").config();

const postRouter = require("./routes/postsRouter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/posts", postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Running...");
});
