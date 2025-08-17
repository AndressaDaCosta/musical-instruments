import React from 'react';
import { Link } from 'react-router-dom';
import { useGetInstruments } from '../../hooks/useGetInstruments';
import InstrumentTable from '../../components/InstrumentTable/InstrumentTable';
import './InstrumentTablePage.css';

const InstrumentTablePage: React.FC = () => {
  const { instruments, loading, error } = useGetInstruments();

  if (loading) {
    return <div className="loading">Carregando instrumentos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="instrument-table-page">
      <div className="navigation">
        <Link to="/cards" className="nav-button">
          Listagem (cards)
        </Link>
        <Link to="/table" className="nav-button active">
          Listagem (tabela)
        </Link>
      </div>
      
      <h1>Lista de Instrumentos</h1>
      
      <div className="table-container">
        <InstrumentTable instruments={instruments} />
      </div>
    </div>
  );
};

export default InstrumentTablePage;