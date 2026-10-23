import { Persona } from "../modelos/Persona";

export default function Tarjeta({ persona }: { persona: Persona }) {
  return (
    <div className="bg-purple-100 p-5 rounded-lg shadow-md w-60 text-black">
      <h2 className="text-xl font-bold">{persona.nombre}</h2>
      <p>Ocupación: {persona.ocupacion}</p>
      <p>País: {persona.pais}</p>
    </div>
  );
}
