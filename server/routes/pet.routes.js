import express from "express";
import * as petCtrl from "../controllers/pet.controller.js";

const petRouter = express.Router();

petRouter.post("/api/pets/new", petCtrl.createPet);
petRouter.get("/api/pets/get", petCtrl.getAllPets);
petRouter.get("/api/pets/get/:id", petCtrl.getPetById);
petRouter.put("/api/pets/update/:id", petCtrl.updatePet);
petRouter.delete("/api/pets/delete/:id", petCtrl.deletePet);

export { petRouter };
