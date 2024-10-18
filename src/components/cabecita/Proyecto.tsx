import useIdiomaStore from "@/stores/idioma";
import usePeliculaStore from "@/stores/peliculastore";
import type { Peliculas } from "@/stores/proyectos";
import { useEffect, useState } from "react";

interface Props {
  pelicula: string;
  codigo: number;
}

export const Proyecto = ({ codigo }: Props) => {
  const { pelicula: film, setPelicula } = usePeliculaStore();
  const { idioma, setidioma } = useIdiomaStore();
  const [currentFilm, setCurrentFilm] = useState<Peliculas>({} as Peliculas);
  const [langContent, setLangContent] = useState(null as any);
  useEffect(() => {
    setPelicula(codigo);
  }, [codigo]);
  useEffect(() => {
    if (film) {
      if (idioma === "en") {
        setLangContent(film?.en);
      } else {
        setLangContent(film?.es);
      }
    }
  }, [idioma, film]);

  if (!langContent) {
    return;
  }

  return (
    <>
      <div className="bg-pink-800 h-auto w-full p-4">
        <button onClick={() => setidioma("en")}>Inglés</button>
        <button onClick={() => setidioma("es")}>Español</button>
        {langContent && <h2>{langContent.nombre}</h2>}
        {film?.poster && <img src={`posteres/${codigo}po.jpg`} />}

        {/* <h2>{codigo}</h2>

        {idioma === "en" ? film?.en?.sinopsis : film?.es?.sinopsis}
        {JSON.stringify(langContent, null, 2)} */}
      </div>
    </>
  );
};
