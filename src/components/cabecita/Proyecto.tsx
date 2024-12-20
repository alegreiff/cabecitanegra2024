import useAyudas from "@/hooks/useAyudas";
import { useIdiomaStore } from "@/stores/idioma";
import usePeliculaStore from "@/stores/peliculastore";
import type { Peliculas } from "@/stores/proyectos";
import { useEffect, useState } from "react";
import ImagenesGaleria from "./ImagenesGaleria";

interface Props {
  pelicula: string;
  codigo: number;
}

export const Proyecto = ({ codigo }: Props) => {
  const {
    desarrollo,
    productor,
    director,
    coproductor,
    agenteventas,
    protagonista,
    artistas,
    companies,
  } = useAyudas();
  const { pelicula: film, setPelicula } = usePeliculaStore();
  const idioma = useIdiomaStore((lan) => lan.idioma);
  /* console.log("MI IDIOMA ES: ", idioma); */
  //const { idioma } = useIdiomaStore();
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
  /* console.log("GALLERY", film?.galeria); */

  if (!langContent) {
    return;
  }

  return (
    <>
      <div className="h-auto w-full p-4">
        <h2 className="text-red-600 text-5xl font-bold pb-4 text-center md:text-left ">
          {langContent.nombre}
        </h2>

        <div className="lg:flex gap-8">
          {film?.poster ? (
            <img
              alt={langContent.nombre}
              src={`/posteres/${codigo}po.jpg`}
              className="aspect[320/457] object-contain self-start mx-auto mb-4"
            />
          ) : null}

          <div className="p-4 bg-indigo-900/50">
            <h4> {desarrollo(codigo)} </h4>
            <span> {film?.year} </span>
            <p>{langContent.describe}</p>

            <p>{langContent.temas}</p>
            <p> {langContent.duracion} </p>
            <p>{artistas(codigo)}</p>
            {film?.cast && (
              <p>
                {idioma === "es" ? "Reparto:" : "Cast:"} {film?.cast}
              </p>
            )}
            <p>{director(codigo)}</p>
            <p>{productor(codigo)}</p>
            <p>{companies(codigo)}</p>
            <p>{protagonista(codigo)}</p>
            <p>{coproductor(codigo)}</p>
            <p>{agenteventas(codigo)}</p>

            <div
              className="mt-8 "
              dangerouslySetInnerHTML={{ __html: langContent.sinopsis }}
            ></div>
            {langContent.premios && (
              <div
                className="bg-indigo-800/40 p-8 h-auto mt-8"
                dangerouslySetInnerHTML={{ __html: langContent.premios }}
              ></div>
            )}
          </div>
        </div>

        {film?.galeria != undefined ? (
          <ImagenesGaleria
            galeria={film?.galeria}
            code={codigo}
            label={langContent.nombre}
          />
        ) : null}
        {film?.dossier && (
          <a href={`/dossier/${film?.dossier}`} target="_blank">
            <h3 className="inline border-b-2 pb-2 border-red-500">
              Dossier {langContent.nombre}
            </h3>
          </a>
        )}
        {film?.trailer && (
          <div
            className="relative mt-12"
            style={{
              paddingTop: "56.25%",
              backgroundColor: "transparent",
            }}
          >
            <iframe
              src={`https://player.vimeo.com/video/${film?.trailer}?transparent=1&background=0`}
              width="auto"
              height="auto"
              allow="autoplay; fullscreen"
              className="absolute inset-0 bg-transparent w-full h-full"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
};
