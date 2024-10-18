import { Proyecto } from "@/components/cabecita/Proyecto";
import { useState } from "react";
import { NombrePelicula } from "./NombrePelicula";
import useIdiomaStore from "@/stores/idioma";

export const SelectProyecto = () => {
  const [proyecto, setProyecto] = useState("");
  const [codeFilm, setCodeFilm] = useState(15);
  const { idioma } = useIdiomaStore();
  return (
    <>
      <section className="container mx-auto ">
        <div className="bg-slate-800 h-40"></div>
        <div className="md:flex h-[800px]">
          <div className="bg-slate-700 md:w-1/3 p-4 md:p-8 space-y-1">
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="La Anunciación"
              code={15}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Cólera Morbo"
              code={1}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Karol, la reina vampira"
              code={7}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Laika en las estrellas"
              code={2}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Duermevela"
              code={3}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="El Resquicio"
              code={4}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Antología de lo invisible"
              code={10}
            />
            <NombrePelicula
              setCodeFilm={setCodeFilm}
              nombre="Señoritas"
              code={14}
            />
          </div>

          <div className="md:w-2/3">
            <Proyecto pelicula={proyecto} codigo={codeFilm} />
          </div>
        </div>
      </section>
    </>
  );
};
