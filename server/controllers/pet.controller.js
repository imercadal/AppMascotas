import Pet from "../models/pet.model.js";

//CREATE
const createPet = async (req, res) => {
  try {
    let data = req.body;
    let newData = await Pet.create(data);
    res.status(200).json(newData);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: "Please fill the form correctly",
    });
  }
};

// GET ALL
const getAllPets = async (req, res) => {
  try {
    let list = await Pet.find().sort({ petType: 1 }).exec();
    res.status(200).json(list);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET BY ID
const getPetById = async (req, res) => {
  try {
    let id = req.params.id;
    let found = await Pet.findById(id);
    res.status(200).json(found);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

//UPDATE
const updatePet = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    await Pet.findByIdAndUpdate(id, data, { runValidators: true });
    res.status(200).json();
  } catch (error) {
    console.log("Error" + error);
    res.status(400).json({
      message: error.message,
    });
  }
};

//DELETE
const deletePet = async (req, res) => {
  try {
    let id = req.params.id;
    await Pet.findByIdAndDelete(id);
    res.status(200).json();
  } catch (error) {
    console.log("Error" + error);
    res.status(400).json({
      error: "La adopción no se ha podido realizar. Por favor, inténtelo de nuevo."});
  }
};

export { createPet, getAllPets, getPetById, updatePet, deletePet };
