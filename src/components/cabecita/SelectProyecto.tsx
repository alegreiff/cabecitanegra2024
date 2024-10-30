import { Proyecto } from "@/components/cabecita/Proyecto";
import { useState } from "react";
import { NombrePelicula } from "./NombrePelicula";
import { useIdiomaStore } from "@/stores/idioma";

export const SelectProyecto = () => {
  const [proyecto, setProyecto] = useState("");
  const [codeFilm, setCodeFilm] = useState(1);
  const { idioma } = useIdiomaStore();
  return (
    <>
      <section className="container mx-auto ">
        <div className="h-24"></div>
        <div className="md:flex">
          <div className=" md:w-[250px] p-4 md:p-8 space-y-1">
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Cólera Morbo"
              code={1}
              codeFilm={codeFilm}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="La Anunciación"
              code={15}
              codeFilm={codeFilm}
            />

            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Karol, la reina vampira"
              code={7}
              codeFilm={codeFilm}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Laika en las estrellas"
              code={2}
              codeFilm={codeFilm}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Duermevela"
              code={3}
              codeFilm={codeFilm}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="El Resquicio"
              code={4}
              codeFilm={codeFilm}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Antología de lo invisible"
              code={10}
              codeFilm={codeFilm}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Señoritas"
              code={14}
              codeFilm={codeFilm}
            />
          </div>

          <div className="md:w-full">
            <Proyecto pelicula={proyecto} codigo={codeFilm} />
          </div>
        </div>
      </section>
    </>
  );
};
