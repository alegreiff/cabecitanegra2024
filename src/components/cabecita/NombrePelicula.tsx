import usePelicula from "@/stores/usePelicula";

interface Props {
  setCodeFilm: (code: number) => void;
  nombre: string;
  code: number;
  codeFilm: number;
}

export const NombrePelicula = ({
  setCodeFilm,
  nombre,
  code,
  codeFilm,
}: Props) => {
  const peliname = usePelicula(code);

  return (
    <a
      className=""
      onClick={() => {
        setCodeFilm(code);
      }}
    >
      <h3
        className={
          codeFilm != code
            ? "mb-2 text-xl font-bold text-red-500 hover:text-red-300 block cursor-pointer"
            : "mb-2 text-xl font-bold text-red-300 hover:text-red-500 block cursor-pointer"
        }
      >
        {peliname}
      </h3>
    </a>
  );
};
