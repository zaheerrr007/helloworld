const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log("server is connected")
})
app.get("/", (req, res) => {
  res.send("<h1>This is Deployed from Ec2 and used Docker...</h1>")
  });
