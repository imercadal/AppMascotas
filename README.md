# Examen Coding Dojo
APP MASCOTAS

DB: mascotasdb
Puerto servidor: 8000

Rutas API:
petRouter.post("/api/pets/new", petCtrl.createPet);
petRouter.get("/api/pets/get", petCtrl.getAllPets);
petRouter.get("/api/pets/get/:petsId", petCtrl.getPetById);
petRouter.put("/api/pets/update/:petsId", petCtrl.updatePet);
petRouter.delete("/api/pets/delete/:petsId", petCtrl.deletePet);

Rutas de navegación:
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/pets/new" element={<CreatePage></CreatePage>}></Route>
          <Route path="/pets/:id" element={<DetailsPage></DetailsPage>}></Route>
          <Route path="/pets/:id/edit" element={<EditPage></EditPage>}></Route>
          <Route path="*" element={<NotFound />} />


npm install socket.io
