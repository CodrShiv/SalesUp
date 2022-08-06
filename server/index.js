const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/start", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})
app.listen(3001)