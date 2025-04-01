// Server Instantiate
const express = require("express");
const app = express();

// Used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");
// specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());

// Activate the server on port 3000
app.listen(3000, () => {
  console.log("App start on port no  3000 ");
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello kya haal hn ");
});

app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car data submitted");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/", {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection sucessful");
  })
  .catch((error) => {
    console.log("Recevied an error");
  });
 