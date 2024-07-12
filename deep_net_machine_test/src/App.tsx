import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Drinks from "./page/Drinks";
import './styles/app.css'
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          
          <Route path="menu" element={<Menu />} >
            
          <Route path="drinks" element={ <Drinks/>} />
          
        </Route>
        </Route>

       
    </Routes>
    </BrowserRouter>
  </>;
}

export default App;
