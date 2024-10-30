import { personas } from "@/stores/proyectos";
import Perfil from "./Perfil";

export default function Perfiles() {
  const personasCabecita = personas;
  return (
    <>
      <section className="container mx-auto ">
        <div className=" h-24 "></div>
        <div className="md:flex gap-8 bg-indigo-950/50 p-16">
          {personasCabecita.map((persona) => (
            <Perfil persona={persona} key={persona.nombres} />
          ))}
        </div>
      </section>
    </>
  );
}
