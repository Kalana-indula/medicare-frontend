import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddAdmin from "./pages/AddAdmin";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/addadmin" element={<AddAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;