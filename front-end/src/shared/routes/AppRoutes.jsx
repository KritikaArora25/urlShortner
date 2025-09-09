import { Route, Routes } from "react-router-dom";
import { Home } from "../../modules/user/pages/Home";
import { Login } from "../../modules/user/pages/Login";
import Register from "../../modules/user/pages/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
