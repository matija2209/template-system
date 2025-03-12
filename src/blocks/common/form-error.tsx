import React from "react";

function FormError() {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
      role="alert"
    >
      <p className="font-bold">Fehler</p>
      <p>Es war ein Fehler.</p>
    </div>
  );
}

export default FormError;
