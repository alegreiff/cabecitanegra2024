import useIdiomaStore from "@/stores/idioma";

export const Ejemplo = () => {
  const { idioma } = useIdiomaStore();
  return (
    <>
      <div>El idioma es: {idioma}</div>

      <a href="/proyectos">Entrar</a>
    </>
  );
};
