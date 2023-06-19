const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World"));

app.get("/name", (req, res) => res.send("ZEROBOY"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is runnin at port : ${PORT}`));
