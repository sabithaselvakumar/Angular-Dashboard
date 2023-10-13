const express = require("express");
//const path = require("path");
const bodyparser = require("body-parser");
const cors  = require("cors");
const app = express();
const corsOption = {
  origin: "*"
}
app.use(cors(corsOption));
app.use(bodyparser.json());

//const dbconfig = require("./config/db")
const db = require("./modals");

const productRoutes = require('./routes/product');


// Authentiction Routes
db.mongoose
.connect(
    "mongodb+srv://sabithaselvakumar:Sabitha04@cluster0.qr855ap.mongodb.net/?retryWrites=true&w=majority" , { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then((res) => {
    console.log("Connected");
  })
  
  .catch(err=>{
      console.log(err);
      process.exit();

  });


app.use(`/product`,productRoutes);


const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`app is working ${port}`);
});
