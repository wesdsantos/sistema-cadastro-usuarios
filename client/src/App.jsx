import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./scenes/CreateUser";
import Home from "./scenes/Home";
import UserList from "./scenes/UserList";
import UserPage from "./scenes/UserPage";
import EditUser from "./scenes/EditUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar" element={<CreateUser />} />
        <Route path="/usuarios" element={<UserList />} />
        <Route path="/usuario/:id" element={<UserPage />} />
        <Route path="/usuario/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
