
import React, { useState, useCallback } from 'react';
import { AnamnesisFormData, MedicalProtocol } from './types';
import { MEDICAL_PROTOCOLS } from './constants';
import { generateAnamnesisFromData } from './services/geminiService';

import Header from './components/Header';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import ClinicalSuspicionSection from './components/ClinicalSuspicionSection';
import ResultSection from './components/ResultSection';
import ProtocolModal from './components/ProtocolModal';
import Toast from './components/Toast';

const initialFormData: Omit<AnamnesisFormData, 'nome'> = {
  gestacoes: '0', partos: '0', cesareas: '0', abortos: '0',
  intercorrencias: '', ig: '', ig_metodo: '', data_dum: '', data_usg: '',
  ig_usg: '', ts: '', comorbidades: '', medicacoes: '', alergias: '',
  toxoplasmose: '', sorologias: '', gbs: '', vicios: '',
  subjetivo: '', objetivo_custom: '', beg: 'BEG', loc: 'LOC', muc: 'MUC',
  pa_sistolica: '', pa_diastolica: '', fc: '', tax: '', fr: '', sato2: '', hgt: '',
  bcf: '', tu: '', du: '', tv: '', ee: '', exame_abdominal: '', exame_mmii: '',
  avaliacao: '', plano: '', academico: '', supervisor: ''
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<AnamnesisFormData>(initialFormData);
  const [generatedAnamnesis, setGeneratedAnamnesis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProtocol, setCurrentProtocol] = useState<MedicalProtocol | null>(null);
  
  const [toastMessage, setToastMessage] = useState<string>('');

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }, []);

  const handleGenerateClick = () => {
    setIsLoading(true);
    setGeneratedAnamnesis('');

    // Use a short timeout to allow the UI to update to the loading state
    // before running the synchronous generation. This ensures the user sees feedback.
    setTimeout(() => {
      try {
        const result = generateAnamnesisFromData(formData);
        setGeneratedAnamnesis(result);
        showToast('✅ Anamnese gerada com sucesso!');
      } catch (error) {
        console.error(error);
        setGeneratedAnamnesis('Ocorreu um erro ao gerar a anamnese.');
        showToast('❌ Erro ao gerar anamnese.');
      } finally {
        setIsLoading(false);
      }
    }, 50); // A small delay ensures the loader is visible for a moment.
  };

  const handleOpenModal = (protocol: MedicalProtocol) => {
    setCurrentProtocol(protocol);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProtocol(null);
  };

  const handleAddProtocolToForm = (protocol: MedicalProtocol) => {
    setFormData(prev => {
        const newAvaliacao = prev.avaliacao 
            ? `${prev.avaliacao}\n\n${protocol.avaliacao}`
            : protocol.avaliacao;
        
        const condutasTexto = protocol.condutas.join('; ');
        const newPlano = prev.plano
            ? `${prev.plano}\n\n${condutasTexto}`
            : condutasTexto;

        return { ...prev, avaliacao: newAvaliacao, plano: newPlano };
    });
    showToast('✅ Avaliação e condutas adicionadas!');
    handleCloseModal();
  };

  const handleCopy = () => {
    if (generatedAnamnesis) {
      navigator.clipboard.writeText(generatedAnamnesis)
        .then(() => showToast('📋 Anamnese copiada para a área de transferência!'))
        .catch(() => showToast('❌ Falha ao copiar texto.'));
    }
  };

  const handleResetResult = () => {
    setGeneratedAnamnesis('');
  };

  return (
    <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] min-h-screen p-5 font-sans">
      <div className="container max-w-screen-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <Header />
        <main className="grid grid-cols-1 xl:grid-cols-[2fr_1.2fr_1.5fr]">
          <FormSection 
            formData={formData}
            onFormChange={handleFormChange}
            onSubmit={handleGenerateClick}
            isLoading={isLoading}
          />
          <ClinicalSuspicionSection onOpenModal={handleOpenModal} />
          <ResultSection
            anamnesis={generatedAnamnesis}
            isLoading={isLoading}
            onCopy={handleCopy}
            onReset={handleResetResult}
          />
        </main>
        <Footer />
      </div>
      <ProtocolModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddProtocolToForm}
        protocol={currentProtocol}
      />
      {toastMessage && <Toast message={toastMessage} onDone={() => setToastMessage('')} />}
    </div>
  );
};

export default App;
    