
import React from 'react';

interface ResultSectionProps {
  anamnesis: string;
  isLoading: boolean;
  onCopy: () => void;
  onReset: () => void;
}

const SuccessIcon: React.FC = () => (
    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);


const ResultSection: React.FC<ResultSectionProps> = ({ anamnesis, isLoading, onCopy, onReset }) => {
  const showResult = anamnesis !== '';

  return (
    <div className="bg-gray-100 p-10 overflow-y-auto max-h-[80vh] relative flex flex-col">
      <h2 className="text-2xl font-bold text-[#2c3e50] mb-6 pb-2 border-b-3 border-[#3498db]">📄 Anamnese Gerada</h2>
      
      <div className="flex-grow flex flex-col items-center justify-center">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
            <p className="mt-4 text-gray-600 font-semibold">Gerando anamnese com IA...</p>
          </div>
        )}

        {!isLoading && !showResult && (
          <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-10 text-center text-gray-600 italic min-h-[300px] w-full flex items-center justify-center">
            <p>📝 Preencha os campos e clique em <strong>"Gerar Anamnese"</strong> para visualizar o resultado aqui.</p>
          </div>
        )}

        {!isLoading && showResult && (
          <div className="text-center w-full flex flex-col items-center justify-center">
            <SuccessIcon />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Anamnese Pronta!</h3>
            <p className="text-gray-600 mb-6">O texto foi gerado e está pronto para ser copiado.</p>
            <div className="w-full max-w-sm space-y-3">
              <button
                onClick={onCopy}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                📋 Copiar Anamnese
              </button>
              <button
                onClick={onReset}
                className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-gray-600 hover:to-gray-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Gerar Nova Anamnese
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultSection;
    