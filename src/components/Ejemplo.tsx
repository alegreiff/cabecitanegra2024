import { useIdiomaStore } from "@/stores/idioma";

const introES = `<p>Somos una empresa colombiana de <strong>creación</strong> y <strong>producción</strong> de contenidos para cine y televisión fundada en 2009 por Carolina Mosquera y Alfonso Acosta. Nos interesa desarrollar y producir proyectos de alto valor artístico en los que se asuman riesgos narrativos y estéticos, historias con visiones fuertes, personales y originales.</p>
:
<p>En Cabecitanegra encontrarán un espacio íntimo de creación, de aprendizaje, y de trabajo colaborativo.</p>
`;

const introEN = `<p>Independent film production company based in Bogotá, Colombia interested in producing art-house content. Its films and TV series are caracterized by its multiple reading layers with a strong, fresh and original vision.</p>
:
<p>A creative look on production processes, the strength of good ideas, the passion and a strong authorial character, guide the production of our projects.</p>
`;

export const Ejemplo = () => {
  const { idioma } = useIdiomaStore();
  return (
    <>
      <div className="max-w-lg p-20 text-2xl font-light mt-40">
        <div
          dangerouslySetInnerHTML={{
            __html: idioma === "es" ? introES : introEN,
          }}
        ></div>
        <a
          href="/proyectos"
          className="block mt-12 text-center border-2 border-slate-200 p-2"
        >
          {idioma === "es" ? "Entrar" : "Enter"}
        </a>
      </div>
    </>
  );
};
