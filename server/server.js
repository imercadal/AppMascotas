import express from "express"; 
import cors from "cors";
import createShelterConnect from './config/mongoose.config.js';
import * as petRoutes from "./routes/pet.routes.js"; 

const app = express(); 
const port = 8000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

createShelterConnect();

app.use(petRoutes.petRouter);

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto ${port}`);
});