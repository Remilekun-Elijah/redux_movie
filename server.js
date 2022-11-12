const express = require("express");
const path = require("path");
const port = process.env.PORT || 3002;
const app = express();

app.use(express.static(path.join(__dirname, "./build")));

app.get("/*", function (req, res) {
 res.sendFile("index.html");
});

app.listen(port, () => console.log(`app is running on port ${port}`));