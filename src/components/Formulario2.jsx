import React from "react";
import { useForm } from "react-hook-form";

export const Formulario2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <h1>Formularios 2: con useReducer</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register("nombre")} />
        <br />
        <input type="text" placeholder="Email" {...register("email")} />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password")}
        />
        <br />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          {...register("confirmar")}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
