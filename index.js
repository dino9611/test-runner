const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    message: "coba tes dari runner",
  });
});

app.listen(4000, () => console.log("app jalan di 4000 "));
