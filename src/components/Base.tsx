import { useIdiomaStore } from "@/stores/idioma";

export const Base = () => {
  const idioma = useIdiomaStore((lan) => lan.idioma);
  const cambiaIdioma = useIdiomaStore((lan) => lan.setidioma);

  return (
    <div className="text-white text-2xl flex gap-8 justify-end container mx-auto pr-4">
      <button
        onClick={() => cambiaIdioma("en")}
        className={idioma === "en" ? "border-b-2  border-red-500" : ""}
      >
        EN
      </button>
      <button
        onClick={() => cambiaIdioma("es")}
        className={idioma === "es" ? "border-b-2  border-red-500" : ""}
      >
        ES
      </button>
    </div>
  );
};
