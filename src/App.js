import "./App.css";
import CalculatorPage from "../src/pages/calculatorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider, createContext } from "../src/context/globalcontext";
import LoginPage from "./pages/loginPage";
import ConfirmPage from "./pages/confirmOperationPage";
import { useReducer } from "react";
import ProfilePage from "./pages/profilePage";
import DashboardPage from "./pages/dashboardDivisas";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="confirm" element={<ConfirmPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="dashboardDivisas" element={<DashboardPage/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
