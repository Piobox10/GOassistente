
export interface AnamnesisFormData {
  gestacoes: string;
  partos: string;
  cesareas: string;
  abortos: string;
  intercorrencias: string;
  ig: string;
  ig_metodo: string;
  data_dum: string;
  data_usg: string;
  ig_usg: string;
  ts: string;
  comorbidades: string;
  medicacoes: string;
  alergias: string;
  toxoplasmose: string;
  sorologias: string;
  gbs: string;
  vicios: string;
  subjetivo: string;
  objetivo_custom: string;
  beg: string;
  loc: string;
  muc: string;
  pa_sistolica: string;
  pa_diastolica: string;
  fc: string;
  tax: string;
  fr: string;
  sato2: string;
  hgt: string;
  bcf: string;
  tu: string;
  du: string;
  tv: string;
ee: string;
  exame_abdominal: string;
  exame_mmii: string;
  avaliacao: string;
  plano: string;
  academico: string;
  supervisor: string;
}

export interface MedicalProtocol {
  key: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  avaliacao: string;
  condutas: string[];
  observacoes: string;
}