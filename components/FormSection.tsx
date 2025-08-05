
import React from 'react';
import { AnamnesisFormData } from '../types';

interface FormSectionProps {
  formData: AnamnesisFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const InputField: React.FC<{
  id: keyof AnamnesisFormData;
  label: string;
  value: string;
  onChange: FormSectionProps['onFormChange'];
  type?: string;
  placeholder?: string;
  min?: string;
}> = ({ id, label, value, onChange, type = 'text', placeholder, min }) => (
  <div className="form-group">
    <label htmlFor={id} className="block mb-1.5 font-semibold text-[#2c3e50]">{label}:</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
    />
  </div>
);

const TextAreaField: React.FC<{
  id: keyof AnamnesisFormData;
  label: string;
  value: string;
  onChange: FormSectionProps['onFormChange'];
  placeholder: string;
}> = ({ id, label, value, onChange, placeholder }) => (
    <div className="form-group">
        <label htmlFor={id} className="block mb-1.5 font-semibold text-[#2c3e50]">{label}:</label>
        <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm resize-vertical min-h-[80px] transition-all duration-300 focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
        />
    </div>
);

const SelectField: React.FC<{
    id: keyof AnamnesisFormData;
    label: string;
    value: string;
    onChange: FormSectionProps['onFormChange'];
    children: React.ReactNode;
}> = ({ id, label, value, onChange, children }) => (
    <div className="form-group">
        <label htmlFor={id} className="block mb-1.5 font-semibold text-[#2c3e50]">{label}:</label>
        <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
        >
            {children}
        </select>
    </div>
);


const Subsection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-50 p-5 rounded-lg mb-6 border-l-4 border-[#3498db]">
    <h3 className="text-xl font-bold text-[#2c3e50] mb-4">{title}</h3>
    {children}
  </div>
);


const FormSection: React.FC<FormSectionProps> = ({ formData, onFormChange, onSubmit, isLoading }) => {
  return (
    <div className="p-10 overflow-y-auto max-h-[80vh]">
      <h2 className="text-2xl font-bold text-[#2c3e50] mb-6 pb-2 border-b-3 border-[#3498db]">📋 Dados da Paciente</h2>
      
      <Subsection title="Informações Básicas">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <InputField id="gestacoes" label="Gestações (G)" value={formData.gestacoes} onChange={onFormChange} type="number" min="0" />
            <InputField id="partos" label="Partos Normais (N)" value={formData.partos} onChange={onFormChange} type="number" min="0" />
            <InputField id="cesareas" label="Cesáreas (C)" value={formData.cesareas} onChange={onFormChange} type="number" min="0" />
            <InputField id="abortos" label="Abortos (A)" value={formData.abortos} onChange={onFormChange} type="number" min="0" />
        </div>
        <div className="mt-4">
            <TextAreaField id="intercorrencias" label="Intercorrências em gestações prévias (uma por linha)" value={formData.intercorrencias} onChange={onFormChange} placeholder="Digite cada intercorrência em uma linha separada" />
        </div>
      </Subsection>

      <Subsection title="Dados Clínicos">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField id="ig" label="IG (Idade Gestacional)" value={formData.ig} onChange={onFormChange} placeholder="Ex: 32s3d" />
            <SelectField id="ig_metodo" label="Método de Cálculo da IG" value={formData.ig_metodo} onChange={onFormChange}>
                <option value="">Selecione</option>
                <option value="DUM">DUM (Data Última Menstruação)</option>
                <option value="USG">USG (Ultrassom)</option>
            </SelectField>
        </div>
        {formData.ig_metodo === 'DUM' && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <InputField id="data_dum" label="Data da Última Menstruação" value={formData.data_dum} onChange={onFormChange} type="date" />
            </div>
        )}
        {formData.ig_metodo === 'USG' && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField id="data_usg" label="Data do USG" value={formData.data_usg} onChange={onFormChange} type="date" />
                <InputField id="ig_usg" label="IG Estimada no USG" value={formData.ig_usg} onChange={onFormChange} placeholder="Ex: 7s4d" />
            </div>
        )}
        <div className="mt-4">
            <SelectField id="ts" label="Tipo Sanguíneo" value={formData.ts} onChange={onFormChange}>
                <option value="">Selecione</option>
                <option value="A+">A+</option><option value="A-">A-</option>
                <option value="B+">B+</option><option value="B-">B-</option>
                <option value="AB+">AB+</option><option value="AB-">AB-</option>
                <option value="O+">O+</option><option value="O-">O-</option>
            </SelectField>
        </div>
        <div className="mt-4"><TextAreaField id="comorbidades" label="Comorbidades (uma por linha)" value={formData.comorbidades} onChange={onFormChange} placeholder="Digite cada comorbidade ou 'Nega'" /></div>
        <div className="mt-4"><TextAreaField id="medicacoes" label="Medicações de Uso Contínuo (uma por linha)" value={formData.medicacoes} onChange={onFormChange} placeholder="Digite cada medicação ou 'Nega'" /></div>
        <div className="mt-4"><InputField id="alergias" label="Alergias" value={formData.alergias} onChange={onFormChange} placeholder="Digite as alergias ou 'Nega'" /></div>
      </Subsection>

      <Subsection title="Exames e Sorologias">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField id="toxoplasmose" label="Toxoplasmose" value={formData.toxoplasmose} onChange={onFormChange}>
                <option value="">Selecione</option>
                <option value="SUSCETÍVEL">Suscetível</option>
                <option value="IMUNE">Imune</option>
                <option value="DESCONHECIDO">Desconhecido</option>
            </SelectField>
            <SelectField id="gbs" label="GBS" value={formData.gbs} onChange={onFormChange}>
                <option value="">Selecione</option>
                <option value="REALIZADA">Realizada</option>
                <option value="NÃO REALIZADA">Não Realizada</option>
            </SelectField>
        </div>
        <div className="mt-4"><InputField id="sorologias" label="Sorologias" value={formData.sorologias} onChange={onFormChange} placeholder="Ex: NR (não reagentes) ou liste as reagentes" /></div>
        <div className="mt-4"><InputField id="vicios" label="Etilismo/Tabagismo/Outros vícios" value={formData.vicios} onChange={onFormChange} placeholder="Descreva os vícios ou digite 'Nega'" /></div>
      </Subsection>

      <Subsection title="Subjetivo">
        <TextAreaField id="subjetivo" label="S - Queixa Principal" value={formData.subjetivo} onChange={onFormChange} placeholder="Descreva a queixa principal da paciente" />
        <div className="mt-4"><TextAreaField id="objetivo_custom" label="O - Dados Objetivos Personalizados (opcional)" value={formData.objetivo_custom} onChange={onFormChange} placeholder="Adicione dados objetivos específicos se desejar" /></div>
      </Subsection>

      <Subsection title="Dados Objetivos - Sinais Vitais">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InputField id="beg" label="Estado Geral" value={formData.beg} onChange={onFormChange} placeholder="Ex: BEG" />
            <InputField id="loc" label="Orientação" value={formData.loc} onChange={onFormChange} placeholder="Ex: LOC" />
            <InputField id="muc" label="Mucosas" value={formData.muc} onChange={onFormChange} placeholder="Ex: MUC" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <InputField id="pa_sistolica" label="PA Sistólica" value={formData.pa_sistolica} onChange={onFormChange} type="number" placeholder="Ex: 120" />
            <InputField id="pa_diastolica" label="PA Diastólica" value={formData.pa_diastolica} onChange={onFormChange} type="number" placeholder="Ex: 80" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <InputField id="fc" label="FC (bpm)" value={formData.fc} onChange={onFormChange} type="number" placeholder="Ex: 80" />
            <InputField id="tax" label="Tax (°C)" value={formData.tax} onChange={onFormChange} placeholder="Ex: 36,5" />
            <InputField id="fr" label="FR (irpm)" value={formData.fr} onChange={onFormChange} type="number" placeholder="Ex: 16" />
            <InputField id="sato2" label="SatO2 (%)" value={formData.sato2} onChange={onFormChange} type="number" placeholder="Ex: 98" />
        </div>
        <div className="mt-4"><InputField id="hgt" label="HGT" value={formData.hgt} onChange={onFormChange} type="number" placeholder="Ex: 95" /></div>
      </Subsection>

      <Subsection title="Dados Objetivos - Exame Obstétrico">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField id="bcf" label="BCF (bpm)" value={formData.bcf} onChange={onFormChange} type="number" placeholder="Ex: 140" />
            <InputField id="tu" label="Tônus Uterino" value={formData.tu} onChange={onFormChange} placeholder="Ex: NORMAL" />
            <InputField id="du" label="Dinâmica Uterina" value={formData.du} onChange={onFormChange} placeholder="Ex: AUSENTE" />
            <InputField id="tv" label="Toque Vaginal" value={formData.tv} onChange={onFormChange} placeholder="Ex: COLO FECHADO" />
        </div>
        <div className="mt-4"><InputField id="ee" label="Exame Especular" value={formData.ee} onChange={onFormChange} placeholder="Ex: LEUCORREIA FISIOLOGICA" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <InputField id="exame_abdominal" label="Exame Abdominal" value={formData.exame_abdominal} onChange={onFormChange} placeholder="Se necessário" />
            <InputField id="exame_mmii" label="Exame MMII" value={formData.exame_mmii} onChange={onFormChange} placeholder="Se necessário" />
        </div>
      </Subsection>
      
      <Subsection title="Avaliação e Plano">
        <TextAreaField id="avaliacao" label="A - Avaliação" value={formData.avaliacao} onChange={onFormChange} placeholder="Análise, diagnósticos, interpretação dos dados" />
        <div className="mt-4"><TextAreaField id="plano" label="P - Plano" value={formData.plano} onChange={onFormChange} placeholder="Condutas, exames, tratamentos, orientações" /></div>
      </Subsection>

      <Subsection title="Profissionais">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField id="academico" label="Acadêmico" value={formData.academico} onChange={onFormChange} placeholder="Nome do acadêmico" />
            <InputField id="supervisor" label="Supervisor" value={formData.supervisor} onChange={onFormChange} placeholder="Nome do supervisor" />
        </div>
      </Subsection>
      
      <button 
        onClick={onSubmit}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white font-bold py-4 px-6 rounded-lg shadow-md hover:from-[#2980b9] hover:to-[#3498db] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Gerando...' : '🔄 Gerar Anamnese'}
      </button>
    </div>
  );
};

export default FormSection;