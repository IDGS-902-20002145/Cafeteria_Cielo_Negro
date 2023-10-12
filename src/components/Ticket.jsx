import React from "react";

function Ticket({ compras, eliminarCompra }) {
  return (
    <div className="ticket">
      <h2>Ticket de Compras</h2>
      <table>
        <thead>
          <tr>
            <th>Café</th>
            <th>Cantidad</th>
            <th>Galletas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((compra, index) => (
            <tr key={index}>
              <td>{compra.cafeSelection}</td>
              <td>{compra.cantidad}</td>
              <td>{compra.galletas * compra.cantidad} galletas</td>
              <td>
                {compra.galletas !== 1 && (
                  <button onClick={() => eliminarCompra(index)}>
                    Eliminar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ticket;
