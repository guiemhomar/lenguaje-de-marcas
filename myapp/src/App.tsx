import React from "react";
import Tabla from "./Tabla";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Lista de Compras</h1>
      <Tabla />
    </div>
  );
};

export default App;