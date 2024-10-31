import useAyudas from "@/hooks/useAyudas";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
interface Props {
  galeria: Array<number>;
  code: number;
  label: string;
}

export default function ImagenesGaleria({ galeria, code, label }: Props) {
  const [open, setOpen] = useState(false);
  const thumbnailsRef = useRef(null);

  const { fotosGaleria } = useAyudas();
  const fotos = fotosGaleria(galeria, code);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <h3 className="mr-4 border-b-2 pb-2 border-red-500">{label}</h3>
      </button>

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        slides={fotos}
      />
    </>
  );
}
