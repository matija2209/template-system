import React from "react";

function FormSuccess() {
  return (
    <div
      className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
      role="alert"
    >
      <p className="font-bold">Erfolg</p>
      <p>Die Aktion wurde erfolgreich ausgeführt!</p>
    </div>
  );
}

export default FormSuccess;
