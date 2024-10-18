import {create} from 'zustand';
import { contenidos, type Peliculas } from './proyectos';




interface peliculaState {
  pelicula: Peliculas | null;
  setPelicula: (id: number) => void;
}


const usePeliculaStore = create<peliculaState>((set) => ({
  pelicula: null,
  setPelicula: (id:number) =>
    set((state) => ({
      ...state,
      pelicula: contenidos.filter((p) => p.id === id)[0] || null,
    })),
  
}))



export default usePeliculaStore;

