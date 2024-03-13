import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./scenes/CreateUser";
import Home from "./scenes/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
