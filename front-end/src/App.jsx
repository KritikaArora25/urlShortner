import React from "react";
import Register from "./modules/user/pages/Register";
import { Login } from "./modules/user/pages/Login";
import { Button } from "@radix-ui/themes";
import { AppRoutes } from "./shared/routes/AppRoutes";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          navigate("/register");
        }}
        variant="classic"
        type="button"
        size="3"
        style={{ margin: 3 }}
      >
        Register
      </Button>
      <Button
        onClick={() => {
          navigate("/login");
        }}
        variant="surface"
        type="button"
        size="3"
        style={{ margin: 3 }}
      >
        Login
      </Button>

      <AppRoutes />

      {/* <Register />
      <Login /> */}
    </>
    // <div>
    //   <h1>Hello React JS</h1>
    //   <h2>Brain Mentors</h2>
    // </div>
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello React JS"),
  //   React.createElement("h2", null, "Brain Mentors")
  // );
}
export default App;
