const express = require("express");
const homeroute = require("./routes/home")

const PORT = 3000;

const app = express();



app.set("view engine", "ejs");
app.set("views", "views");

app.use("/home", homeroute)

app.get("./", (req, res) => {
  res.status(200).render("index")
})

app.get("*", (req, res) => {
  res.status(404).render("error")
})

app.listen(PORT, () => {
console.log(`App running on port ${PORT}...`)
})


