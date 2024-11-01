import { useIdiomaStore } from "@/stores/idioma";
type Props = {
  ruta: string;
};

export default function MenuNav({ ruta }: Props) {
  const rutaLimpia = ruta.replaceAll("/", "");

  const { idioma } = useIdiomaStore();

  return (
    <div className="pt-20   flex justify-center gap-8">
      <a
        href="/proyectos"
        className={
          rutaLimpia === "proyectos"
            ? "uppercase border-b-4 pb-2 border-red-500"
            : "uppercase"
        }
      >
        <h4>{idioma === "es" ? "Películas y series" : "Films and tv"}</h4>
      </a>
      <a
        href="/about"
        className={
          rutaLimpia === "about"
            ? "uppercase border-b-4 pb-2 border-red-500"
            : "uppercase"
        }
      >
        <h4>{idioma === "es" ? "Nosotros" : "About"} </h4>
      </a>
    </div>
  );
}
