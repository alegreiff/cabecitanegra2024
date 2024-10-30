import { useIdiomaStore } from "@/stores/idioma";

export const Base = () => {
  const idioma = useIdiomaStore((lan) => lan.idioma);
  const cambiaIdioma = useIdiomaStore((lan) => lan.setidioma);

  return (
    <div className="text-white text-3xl flex gap-8 justify-end container mx-auto">
      <button onClick={() => cambiaIdioma("en")}>EN</button>
      <button onClick={() => cambiaIdioma("es")}>ES</button>
    </div>
  );
};
