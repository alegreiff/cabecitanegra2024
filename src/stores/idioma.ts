import {create} from 'zustand';

interface idiomaState {
  idioma: string;
  setidioma: (idioma: string) => void;
}

export const useIdiomaStore = create<idiomaState>((set) => ({
  idioma: 'es',
  setidioma: (idioma: string) => set({ idioma })
}));
