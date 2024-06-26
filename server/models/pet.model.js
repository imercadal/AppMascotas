import mongoose from "mongoose";

const PetsSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      minlength: 3,
      required: [true, "Pet Name is required"],
      unique: true,
    },
    petType: {
      type: String,
      minlength: 3,
      required: [true, "Pet's Type is required"],
    },
    petDescription: {
      type: String,
      minlength: 3,
      required: [true, "Pet's Description is required"],
    },
    petSkills: {
      skillOne: {
        type: String,
      },
      skillTwo: {
        type: String,
      },
      skillThree: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Pets = mongoose.model("pets", PetsSchema);

export default Pets;
