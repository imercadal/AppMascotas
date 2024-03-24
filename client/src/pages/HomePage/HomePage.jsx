import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { capitalizeTransform } from '../../helpers/helpers';
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Paper,
  Select,
  Box,
  MenuItem,
  Typography
} from '@mui/material';


export const HomePage = () => {
  const navigate = useNavigate();

  const [petList, setPetList] = useState([]);
  const [selectedType, setSelectedType] = useState("Todos");
  const [filteredPets, setFilteredPets] = useState([]);

  const callPetList = async () => {
    try {
      let result = await axios.get("http://localhost:8000/api/pets/get");
      result.data.sort((a, b) => a.petName.localeCompare(b.petName));
      setPetList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callPetList();
  }, []);

  useEffect(() => {
    if (selectedType !== "Todos") {
      const filtered = petList.filter(pet => pet.petType === selectedType);
      setFilteredPets(filtered);
    } else {
      setFilteredPets(petList);
    }
  }, [selectedType, petList]);

  const goToEdit = (petId) => {
    navigate(`/pets/${petId}/edit`);
  };

  const goToDetails = (petId) => {
    navigate(`/pets/${petId}`);
  };

  const goToCreate = () => {
    navigate("/pets/new");
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const getUniqueTypes = () => {
    const types = petList.map(pet => pet.petType);
    return [...new Set(types)];
  };

  return (
    <div>
      <Navbar
        onclick={goToCreate}
        subTitle={"Estas mascotas están buscando una familia."}
        linkName={"Agregar mascota"}
      />
      <Box component="section" sx={{ p: 2, margin: "auto", textAlign: "center" }}>
      <Typography variant="body1" component="label" htmlFor="type-select" sx={{marginRight: "10px"}}>
        Filtrar por tipo: 
      </Typography>
        <Select
          id="type-select"
          value={selectedType}
          label="Seleccion de tipo"
          onChange={handleTypeChange} 
          sx={{margin: "auto", minWidth: "200px"}}       
        >
          <MenuItem value="">Todos</MenuItem>
          {getUniqueTypes().map((type, index) => (
            <MenuItem key={index} value={type}> {capitalizeTransform(type)} </MenuItem>
          ))}
        </Select>
      </Box>
      <Paper variant="elevation" elevation={3} sx={{
        backgroundColor: "primary.main",
        padding: "30px" }}>
      <Paper sx={{
        alignItems: "center",
        justifyContent: "center",
        margin: "30px",     
        }}>
      <TableContainer sx={{
            alignItems: "center",
            justifyContent: "center"      
            }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mascota</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          {filteredPets.map((item, index) => {
            return (
              <tr key={index}>
                <TableCell>{item.petName}</TableCell>
                <TableCell>{item.petType}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => goToDetails(item._id)}
                    >
                    Detalle
                  </Button>
                  <label> | </label>
                  <Button onClick={() => goToEdit(item._id)}>
                    Editar
                  </Button>
                </TableCell>
              </tr>
            );
          })}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      </Paper>
    </div>
  );
};
