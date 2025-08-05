
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white p-8 text-center relative">
      <h1 className="text-4xl font-bold mb-2">🏥 Assistente de Anamnese Obstétrica com IA</h1>
      <p className="text-lg opacity-90">Sistema inteligente com protocolos médicos baseados em evidências</p>
      <div className="absolute bottom-2 right-5 text-sm opacity-80 italic">made by @joaompio</div>
    </header>
  );
};

export default Header;