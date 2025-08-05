
import React from 'react';
import { MedicalProtocol } from '../types';

interface ProtocolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (protocol: MedicalProtocol) => void;
  protocol: MedicalProtocol | null;
}

const ProtocolModal: React.FC<ProtocolModalProps> = ({ isOpen, onClose, onAdd, protocol }) => {
  if (!isOpen || !protocol) return null;

  const handleAddClick = () => {
    onAdd(protocol);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-[#2c3e50]">{protocol.title}</h3>
          <button onClick={onClose} className="bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold hover:bg-red-600 transition-colors">
            &times;
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">📋 Avaliação Clínica</h4>
            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-blue-500 text-gray-700">
              {protocol.avaliacao}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">🩺 Condutas Recomendadas</h4>
            <div className="bg-gray-100 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {protocol.condutas.map((conduta, index) => (
                  <li key={index}>{conduta}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">⚠️ Observações Importantes</h4>
            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-blue-500 text-gray-700">
              {protocol.observacoes}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleAddClick}
            className="w-full max-w-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            ➕ Adicionar Avaliação e Condutas
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProtocolModal;
