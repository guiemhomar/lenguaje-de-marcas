import React from "react";

interface FilaProps {
  elemento: {
    producto: string;
    cantidad: number;
    precio: number;
    tienda: string;
    notas: string;
    comprado: boolean;
    imagen: string;
  };
}

const Fila: React.FC<FilaProps> = ({ elemento }) => {
  return (
    <tr>
      <td>{elemento.producto}</td>
      <td>{elemento.cantidad}</td>
      <td>{elemento.precio}</td>
      <td>{elemento.tienda}</td>
      <td>{elemento.notas}</td>
      <td>{elemento.comprado ? "Sí" : "No"}</td>
      <td>
        <img src={elemento.imagen} alt={elemento.producto} />
      </td>
    </tr>
  );
};

export default Fila;