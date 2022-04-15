import './App.css';
import Main from "./components/Pages/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
      <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}/>
            </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;
  