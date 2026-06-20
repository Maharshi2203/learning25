const express = require("express"); 
const app = express(); 
const dbConnection = require("./src/utils/DBConnection")
dbConnection() 

const userroutes = require("./src/routes/Userroutes")
app.use(userroutes)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

///task user maate banayu ani jagya employee maate banaine lavanu