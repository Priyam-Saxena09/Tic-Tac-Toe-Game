const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname + "/public"))


app.listen(port,() => {
    console.log("Server is running on port " + port)
})