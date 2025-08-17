import React from 'react';
import { Link } from 'react-router-dom';
import { useGetInstruments } from '../../hooks/useGetInstruments';
import InstrumentCard from '../../components/InstrumentCard/InstrumentCard';
import './InstrumentCardsPage.css';

const InstrumentCardsPage: React.FC = () => {
  const { instruments, loading, error } = useGetInstruments();

  if (loading) {
    return <div className="loading">Carregando instrumentos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="instrument-cards-page">
      <div className="navigation">
        <Link to="/cards" className="nav-button active">
          Listagem (cards)
        </Link>
        <Link to="/table" className="nav-button">
          Listagem (tabela)
        </Link>
      </div>
      
      <h1>Lista de Instrumentos</h1>
      
      <div className="cards-container">
        {instruments.map((instrument) => (
          <InstrumentCard key={instrument.id} instrument={instrument} />
        ))}
      </div>
    </div>
  );
};

export default InstrumentCardsPage;