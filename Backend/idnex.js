// IMPORT MODULES AND CREATE VARs
const connectMongoose = require("./db")
connectMongoose()
const express = require('express')
const app = express()
const port = 5000

// JSON MIDDLEWARE 
app.use(express.json())


// ROUTERS 
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))


// LISTEN APP 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
