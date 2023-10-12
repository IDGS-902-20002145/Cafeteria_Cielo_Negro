import React from "react";

function CafeSelection({ compras, setCompras }) {
  const handleCafeChange = (event, index) => {
    const selection = event.target.value;
    const nuevasCompras = [...compras];
    let newGalletas = 0;
    if (selection === "mediano") {
      newGalletas = 3;
    } else if (selection === "grande") {
      newGalletas = 6;
    } else if (selection === "jumbo") {
      newGalletas = 12;
    }
    nuevasCompras[index].cafeSelection = selection;
    nuevasCompras[index].galletas = newGalletas;
    setCompras(nuevasCompras);
  };

  const handleCantidadChange = (event, index) => {
    const cantidad = parseInt(event.target.value);
    const nuevasCompras = [...compras];
    nuevasCompras[index].cantidad = cantidad;
    setCompras(nuevasCompras);
  };

  return (
    <div>
      <label>Selecciona el tipo de café:</label>
      <select
        value={compras[compras.length - 1].cafeSelection}
        onChange={(e) => handleCafeChange(e, compras.length - 1)}
      >
        <option value="chico">Chico</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
        <option value="jumbo">Jumbo</option>
      </select>
      <br />
      <label>Cantidad:</label>
      <input
        type="number"
        value={compras[compras.length - 1].cantidad}
        onChange={(e) => handleCantidadChange(e, compras.length - 1)}
        min="1"
      />
    </div>
  );
}

export default CafeSelection;
