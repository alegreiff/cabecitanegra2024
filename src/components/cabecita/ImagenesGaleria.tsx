interface Photos {
  src: string;
  min: string;
  w: number;
  h: number;
}

import useAyudas from "@/hooks/useAyudas";
import type { Galer } from "@/stores/proyectos";

import "photoswipe/dist/photoswipe.css";
import { useEffect, useState } from "react";

import { Gallery, Item } from "react-photoswipe-gallery";

interface Props {
  galeria: Galer[];
  code: number;
  label: string;
}

export default function ImagenesGaleria({ galeria, code, label }: Props) {
  //const { fotosGaleria } = useAyudas();
  //const fotos = fotosGaleria(galeria, code);
  const [fotos, setFotos] = useState([] as Photos[]);
  useEffect(() => {
    const fotos: Photos[] = [];
    galeria.forEach((element) => {
      const foto = {
        src: `/posteres/${code}/${element.id}.jpg`,
        min: `/posteres/${code}/${element.id}-min.jpg`,
        w: element.w,
        h: element.h,
      };
      fotos.push(foto);
    });
    setFotos(fotos);
  }, [galeria]);

  return (
    <div className="mt-12 mb-8">
      {fotos.length > 0 && (
        <Gallery>
          <div className="md:flex md:flex-wrap md:gap-4">
            {fotos.map((photo, i) => (
              <Item
                key={i}
                original={photo.src}
                thumbnail={photo.min}
                width={photo.w}
                height={photo.h}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={photo.min}
                    className="cursor-zoom-in object-contain mx-auto pb-4"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      )}
    </div>
  );
}
