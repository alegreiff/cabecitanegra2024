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
      setLangContent(null);
      if (idioma === "en") {
        setLangContent(film?.en);
      } else {
        setLangContent(film?.es);
      }
    }
  }, [idioma, film, codigo]);

  if (!langContent) {
    return;
  }

  return (
    <>
      <div className="h-auto w-full p-4  ">
        <h2 className="text-slate-200 text-3xl font-bold pb-4">
          {langContent.nombre} -- ( {codigo} )
        </h2>
        <div className="lg:flex">
          {film?.poster ? (
            <img
              alt="imagos"
              src={`/posteres/${codigo}po.jpg`}
              className="aspect[320/457] object-contain self-start"
            />
          ) : null}
          <div
            className="pl-4"
            dangerouslySetInnerHTML={{ __html: langContent.sinopsis }}
          ></div>
        </div>
      </div>
    </>
  );
};
