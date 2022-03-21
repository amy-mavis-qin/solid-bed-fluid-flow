import './App.css';
import Simulation from "./components/Pages/Simulation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
      <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Simulation />}/>
            </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;
  