import React from 'react';
import type { Instrument } from '../../types/instrument';
import './InstrumentCard.css';

interface InstrumentCardProps {
  instrument: Instrument;
}

const InstrumentCard: React.FC<InstrumentCardProps> = ({ instrument }) => {
  return (
    <div className="instrument-card">
      <h3 className="card-title">{instrument.nome}</h3>
      <div className="card-content">
        <p><strong>Tipo:</strong> {instrument.tipo}</p>
        <p><strong>Marca:</strong> {instrument.marca}</p>
        <p><strong>Voltagem:</strong> {instrument.voltagem || 'N/A'}</p>
        <p><strong>Ano:</strong> {instrument.ano}</p>
        <p><strong>Preço:</strong> R$ {instrument.preco.toFixed(2)}</p>
        <p><strong>Peso:</strong> {instrument.peso_kg} kg</p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={instrument.ativo ? 'status-active' : 'status-inactive'}>
            {instrument.ativo ? 'Ativo' : 'Inativo'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InstrumentCard;