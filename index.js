const express = require("express")();

express.get("/", (req, res) => {
  res.send("This is just for test");
});

express.listen(2000, () => console.log("server is running"));
