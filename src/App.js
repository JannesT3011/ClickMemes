import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clicker from "./pages/clicker"

//import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Clicker/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
