export interface Contato {
  id: number;
  nome: string;
  telefone: string;
  avatar: string | ArrayBuffer;
  email: string;
  aniversario?: string;
  redes?: string;
  observacoes?: string;
}
