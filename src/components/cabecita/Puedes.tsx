import { useIdiomaStore } from "@/stores/idioma";

const en = `
<h2 className="text-2xl">Con Cabecitanegra también puedes:</h2>
<ul>
<li>Coproducir documentales, series y ficciones</li>
    <li>Hacer tus pasantías y prácticas académicas</li>
    <li>Recibir asesoría para tus proyectos</li>
    <li>Implementar sistemas de producción colaborativos</li>
</ul>`;
const es = `

<h2 className="text-2xl">Con Cabecitanegra también puedes:</h2>
<ul>
<li>Coproducir documentales, series y ficciones</li>
    <li>Hacer tus pasantías y prácticas académicas</li>
    <li>Recibir asesoría para tus proyectos</li>
    <li>Implementar sistemas de producción colaborativos</li>
</ul>
    `;
export default function Puedes() {
  const idioma = useIdiomaStore((lan) => lan.idioma);
  return (
    <div className="container mx-auto bg-indigo-950/50 px-16 pb-16">
      <div
        dangerouslySetInnerHTML={{
          __html: idioma === "es" ? es : en,
        }}
      ></div>

      <div
        className="relative mt-12"
        style={{ paddingTop: "56.25%", backgroundColor: "transparent" }}
      >
        <iframe
          src={`https://player.vimeo.com/video/428813760?transparent=1&background=0`}
          width="640"
          height="360"
          allow="autoplay; fullscreen"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
