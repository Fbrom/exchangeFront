import './App.css';
import  CalculatorPage  from "../src/pages/calculatorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "../src/context/globalcontext";
import LoginPage from './pages/loginPage';
import ConfirmPage from './pages/confirmOperation';

function App() {
  return (
    <ContextProvider>
    <div className="App" >
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<CalculatorPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/confirm" element={<ConfirmPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </ContextProvider>
      )};

export  default App;
