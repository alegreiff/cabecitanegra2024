import {useIdiomaStore} from "./idioma";
import { contenidos } from "./proyectos";


function usePelicula(id: number) {
  const pelicula = contenidos.find((p) => p.id === id) || null;
  const { idioma } = useIdiomaStore();

  if (!pelicula) {
    return null;
  }

  const nombre = idioma === "es" ? pelicula.es?.nombre : pelicula.en?.nombre;

  return nombre || null;
}

export default usePelicula