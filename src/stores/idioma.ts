import {create} from 'zustand';

interface idiomaState {
  idioma: string;
  setidioma: (idioma: string) => void;
}

const useIdiomaStore = create<idiomaState>((set) => ({
  idioma: 'es',
  setidioma: (idioma: string) => set({ idioma }),
}));










export default useIdiomaStore;

