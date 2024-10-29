import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

//Este es el componente principal de la aplicacion
const App: React.FC = () => {
  // isLogin es un estado que nos permite saber si el usuario esta logueado o no
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <nav>
        <button onClick={() => setIsLogin(true)}>Iniciar Sesion</button>
        <button onClick={() => setIsLogin(false)}>Registrarse</button>
      </nav>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

//Este componente esté disponible para usarlo en otras partes de la aplicacion
export default App;
