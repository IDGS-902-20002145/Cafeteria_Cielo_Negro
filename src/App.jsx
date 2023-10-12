import React, { useState } from "react";
import CafeSelection from "./components/CafeSelection";
import Ticket from "./components/Ticket";
import "./App.css"; // Importa los estilos CSS

function App() {
  const [compras, setCompras] = useState([
    { cafeSelection: "chico", cantidad: 1, galletas: 0 },
  ]);

  const totalGalletas = compras.reduce(
    (total, compra) => total + compra.galletas * compra.cantidad,
    0
  );

  const agregarCompra = () => {
    const nuevaCompra = { cafeSelection: "chico", cantidad: 1, galletas: 0 };
    setCompras([...compras, nuevaCompra]);
  };

  const eliminarCompra = (index) => {
    const nuevasCompras = [...compras];
    nuevasCompras.splice(index, 1);
    setCompras(nuevasCompras);
  };

  return (
    <div className="container">
      <h1>Cafetería Cielo Negro</h1>
      <div className="flex-container">
        <div className="cafe-selection">
          <CafeSelection compras={compras} setCompras={setCompras} />
          <button onClick={agregarCompra}>Agregar Compra</button>
        </div>
        <div className="ticket">
          <Ticket compras={compras} eliminarCompra={eliminarCompra} />
          {totalGalletas === 0 ? (
            <p>Este café no incluye regalos.</p>
          ) : (
            <p>
              Debes dar {totalGalletas}{" "}
              {totalGalletas === 1 ? "galleta" : "galletas"} al cliente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
