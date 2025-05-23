import React, { useState } from "react";

export const Formulario1 = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
    alert(`Nombre: ${nombre} \nContraseña: ${password}`);
  };

  return (
    <>
      <h1>Formularios 1: con useState</h1>
      <form action="" onSubmit={handleSubmit}>
        <br />
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
        <hr></hr>
      </form>
    </>
  );
};
