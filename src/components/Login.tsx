//useState es una funcion especial que nos permite guardar y actualos los datos de 
//los componentes
import React, { useState } from "react";

//Este es el componente de login
//Los componentes son bloques que se epueden reutilizar
const Login: React.FC = () => {

    return (
        <div className="login-container">
            <h1>Iniciar Sesion</h1>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );

};

export default Login;
