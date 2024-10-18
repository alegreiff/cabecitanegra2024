import useIdiomaStore from "./idioma";
import { contenidos } from "./proyectos";


function usePelicula(id: number) {
  const pelicula = contenidos.filter((p) => p.id === id)[0] || null;
  const { idioma, setidioma } = useIdiomaStore();
  if (pelicula) {
    if (idioma === "es") {
      return pelicula?.es?.nombre;
    } else {
      return pelicula?.en?.nombre;
    }
  }
  return null;
}

export default usePelicula