import React, { useState } from "react";

const Register: React.FC = () => {
    return (
        <div className="register-container">
            <h1>Registrarse</h1>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;

