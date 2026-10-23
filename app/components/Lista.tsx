
"use client";

import { useState, useEffect } from "react";
import { Persona } from "../modelos/Persona";
import Tarjeta from "./Tarjeta";

export default function ListaPersonas() {

  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    const lista: Persona[] = [
      { id: 1, nombre: "Paola", ocupacion: "Desarrolladora", pais: "Honduras" },
      { id: 2, nombre: "Carlos", ocupacion: "Ingeniero", pais: "México" },
      { id: 3, nombre: "Francisco", ocupacion: "Abogado", pais: "Guatemala" },
      { id: 4, nombre: "Gabriela", ocupacion: "Doctora", pais: "El Salvador" },
    ];

    setPersonas(lista);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-5">
      {personas.map((persona) => (
        <Tarjeta
          key={persona.id}
          persona={persona}
        />
      ))}
    </div>
  );
}
