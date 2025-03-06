const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin:["http://localhost:5174"],
};

app.use(cors(corsOptions));

app.get("/api",(req, res) =>{
  res.json({people: [
    { name: "Monika", age: 30, gender: "Female" },
    { name: "Peter", age: 25, gender: "Male" },
    { name: "Shiva", age: 35, gender: "Male" },
    { name: "Riya", age: 35, gender: "Female" },
    { name: "Laxmi", age: 40, gender: "Female" },
    { name: "Karan", age: 35, gender: "Male" },
  ]});
});

app.listen(8080, () => {
    console.log("server is running on port 8080");
    

});