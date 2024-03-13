import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./scenes/CreateUser";
import Home from "./scenes/Home";
import UserList from "./scenes/UserList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar" element={<CreateUser />} />
        <Route path="/usuarios" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
