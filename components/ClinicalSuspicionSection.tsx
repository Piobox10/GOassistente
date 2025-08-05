
import React from 'react';
import { MEDICAL_PROTOCOLS } from '../constants';
import { MedicalProtocol } from '../types';
import WarningIcon from './icons/WarningIcon';

interface ClinicalSuspicionSectionProps {
  onOpenModal: (protocol: MedicalProtocol) => void;
}

const priorityClasses = {
  high: 'border-l-4 border-red-500',
  medium: 'border-l-4 border-yellow-500',
  low: 'border-l-4 border-green-500',
};

const priorityTranslations: { [key in 'high' | 'medium' | 'low']: string } = {
  high: 'Alta',
  medium: 'Média',
  low: 'Baixa',
};

const ClinicalSuspicionSection: React.FC<ClinicalSuspicionSectionProps> = ({ onOpenModal }) => {
  return (
    <div className="bg-[#f1f8ff] p-8 border-x border-gray-200 overflow-y-auto max-h-[80vh]">
      <h3 className="text-xl font-bold text-[#2c3e50] mb-5 pb-2 border-b-2 border-blue-500">🔬 Suspeita Clínica</h3>
      
      <div className="bg-gradient-to-r from-red-100 to-yellow-100 border-2 border-red-400 rounded-lg p-5 mb-6 shadow-md">
        <div className="font-bold text-red-700 flex items-center mb-3">
          <WarningIcon />
          IMPORTANTE:
        </div>
        <p className="text-sm text-red-800 text-justify leading-relaxed">
          O sistema irá gerar o "padrão-ouro completo" em relação às condutas para a suspeita clínica. Nem tudo é feito dessa maneira na prática no centro obstétrico, seja criterioso e confira se as condutas fazem sentido antes de levar o caso para discussão. Utilizei como referências para as condutas o manual do HMISC (tem no computador do CO), FEBRASGO e o Freitas.
        </p>
      </div>

      <div className="bg-blue-100 text-blue-800 p-4 rounded-lg text-center text-sm mb-5">
        💡 Selecione uma suspeita para ver protocolos e condutas baseados em evidências científicas. Você pode adicionar múltiplas condutas para diferentes condições.
      </div>
      
      <div className="space-y-2">
        {MEDICAL_PROTOCOLS.map((protocol) => (
          <div 
            key={protocol.key}
            onClick={() => onOpenModal(protocol)}
            className={`bg-white rounded-lg p-3 cursor-pointer transition-all duration-300 flex justify-between items-center hover:border-blue-500 hover:bg-blue-50 hover:shadow-md transform hover:translate-x-1 ${priorityClasses[protocol.priority]}`}
          >
            <span className="font-semibold text-[#2c3e50] text-sm">{protocol.title}</span>
            <span className="text-xs text-gray-500 capitalize">{priorityTranslations[protocol.priority]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalSuspicionSection;