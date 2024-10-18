interface Props {
  setCodeFilm: (code: number) => void;
  nombre: string;
  code: number;
}

export const NombrePelicula = ({ setCodeFilm, nombre, code }: Props) => {
  return (
    <a
      className="font-bold text-slate-200 block cursor-pointer hover:text-slate-400"
      onClick={() => {
        setCodeFilm(code);
      }}
    >
      {nombre}
    </a>
  );
};
