import { useIdiomaStore } from "@/stores/idioma";
import { contenidos, type Peliculas } from "@/stores/proyectos";

function useAyudas() {
  const idioma = useIdiomaStore((lan) => lan.idioma);


  const desarrollo = (id:number) => {
    const numDesarrollo = contenidos.find((p) => p.id === id)?.desarrollo || 0;
    if (numDesarrollo === 2 && idioma === "es") {
      return "En desarrollo";
    } else if(numDesarrollo === 2 && idioma === "en"){
      return "In development";

    }else {
      return ""
    }
  }

  const coproductor = (id:number) => {
    const coproductor = contenidos.find((p) => p.id === id)?.coproductor || "";
    if( !coproductor ) {
      return ""
    }
    return `${idioma == "es" ? "Coproductor:" : "Co-Producer:" } ${coproductor}`  ;
  }
  const productor = (id:number) => {
    const productor = contenidos.find((p) => p.id === id)?.productor || "";
    if( !productor ) {
      return ""
    }
    return `${idioma == "es" ? "Productor:" : "Producer:" } ${productor}`  ;
  }


  
  const director = (id:number) => {
    const director = contenidos.find((p) => p.id === id)?.director || "";
    if( !director ) {
      return ""
    }
    return `Director: ${director}`  ;
  }

  const agenteventas = (id:number) => {
    const agenteventas = contenidos.find((p) => p.id === id)?.agenteventas || "";
    if( !agenteventas ) {
      return ""
    }
    return `${idioma == "es" ? "Agente de ventas:" : "Sales agent:" } ${agenteventas}`  ;
  }
  
  const protagonista = (id:number) => {
    const protagonista = contenidos.find((p) => p.id === id)?.protagonista || "";
    if( !protagonista ) {
      return ""
    }
    return `${idioma == "es" ? "Protagonizado por:" : "Star:" } ${protagonista}`  ;
  }


  const artistas = (id:number) => {
    const artistas = contenidos.find((p) => p.id === id)?.artistas || "";
    if( !artistas ) {
      return ""
    }
    return `${idioma == "es" ? "Artistas:" : "Artists:" } ${artistas}`  ;
  }

  const companies = (id:number) => {
    const companies = contenidos.find((p) => p.id === id)?.companies || "";
    if( !companies ) {
      return ""
    }
    return `${idioma == "es" ? "Compañías productoras:" : "Production companies:" } ${companies}`  ;
  }
  
  return {
    desarrollo,
    productor,
    director,
    coproductor, agenteventas, protagonista, artistas, companies
  }




}

export default useAyudas

