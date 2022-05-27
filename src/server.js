import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./router/web";
require('dotenv').config();


let app = express();

// Config app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('backend  Nodejs is running on the port: ' + port)
})