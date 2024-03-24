import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CreatePage } from "./pages/CreatePage/CreatePage";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import EditPage from "./pages/EditPage/EditPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/pets/new" element={<CreatePage></CreatePage>}></Route>
          <Route path="/pets/:id" element={<DetailsPage></DetailsPage>}></Route>
          <Route path="/pets/:id/edit" element={<EditPage></EditPage>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
