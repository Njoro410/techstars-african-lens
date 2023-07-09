import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StockImages from "./pages/StockImages";
import Courses from "./pages/Courses";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<StockImages />} path="/images" />
          <Route element={<Courses />} path="/courses" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/register" />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
