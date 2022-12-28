const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

const uri = "mongodb+srv://nico:nico@cluster0.9ju80xw.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false)
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected")
  })
  .catch(e => {
    console.log("error while connecting", e)
  });

  // Handling CORS policy
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json())

  // Routes
app.get("/", (req, res) => {
    res.send("Working page")
})

app.use("/notes", require("./routes/Notes"))

  app.listen(444, () => {
    console.log("Listening on port 444")
  })