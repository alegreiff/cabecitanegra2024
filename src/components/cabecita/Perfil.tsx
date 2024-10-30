import { useIdiomaStore } from "@/stores/idioma";
import type { Personas } from "@/stores/proyectos";

interface Props {
  persona: Personas;
}
export default function Perfil({ persona }: Props) {
  const idioma = useIdiomaStore((lan) => lan.idioma);
  return (
    <>
      <div className="flex gap-8 flex-col md:w-1/2">
        <div>
          <img
            src={persona.img}
            alt={persona.nombres}
            className="h-128 mx-auto"
          />
        </div>

        <div>
          <h2 className="text-3xl mb-8">{persona.nombres}</h2>
          <h4 className="text-2xl mb-8">
            {idioma === "es" ? persona.rol.es : persona.rol.en}
          </h4>
          <div
            dangerouslySetInnerHTML={{
              __html:
                idioma === "es"
                  ? persona.descripcion.es
                  : persona.descripcion.en,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
