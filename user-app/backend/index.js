const express = require('express');
const routes = require('./router/appRoutes.js');

const app = express();

console.log(routes)
app.use("/app", routes);
app.get("/", (req, res) => {
    res.send("HI HOMEPAGE");
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log("Server is running on port:" + PORT);
})