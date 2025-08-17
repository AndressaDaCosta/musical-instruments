export interface Instrument {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  voltagem?: string;
  ano: number;
  preco: number;
  peso_kg: number;
  ativo: boolean;
}