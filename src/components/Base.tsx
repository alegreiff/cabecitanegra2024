import useIdiomaStore from "@/stores/idioma";
import React from "react";

export const Base = () => {
  const { idioma, setidioma } = useIdiomaStore();
  return (
    <div className="text-white text-3xl">
      <h2>{idioma}</h2>
      <button onClick={() => setidioma("en")}>Inglés</button>
      <button onClick={() => setidioma("es")}>Español</button>
    </div>
  );
};
