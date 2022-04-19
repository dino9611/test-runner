const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    message: "welcome zaky runner aja dari github actions dino tes dari local",
  });
});

app.listen(4000, () => console.log("app jalan di 4000 "));
