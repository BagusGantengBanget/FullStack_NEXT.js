import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import CarRoute from "./routes/CarRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(CarRoute);


app.listen(5000, ()=> console.log('Server Up and Running..'));
