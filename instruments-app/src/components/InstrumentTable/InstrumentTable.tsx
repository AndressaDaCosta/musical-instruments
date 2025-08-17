import React from 'react';
import type { Instrument } from '../../types/instrument';
import './InstrumentTable.css';

interface InstrumentTableProps {
  instruments: Instrument[];
}

const InstrumentTable: React.FC<InstrumentTableProps> = ({ instruments }) => {
  return (
    <table className="instrument-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Voltagem</th>
          <th>Ano</th>
          <th>Preço (R$)</th>
          <th>Peso (kg)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {instruments.map((instrument) => (
          <tr key={instrument.id}>
            <td>{instrument.nome}</td>
            <td>{instrument.tipo}</td>
            <td>{instrument.marca}</td>
            <td>{instrument.voltagem || 'N/A'}</td>
            <td>{instrument.ano}</td>
            <td>{instrument.preco.toFixed(2)}</td>
            <td>{instrument.peso_kg}</td>
            <td className={instrument.ativo ? 'status-active' : 'status-inactive'}>
              {instrument.ativo ? 'true' : 'false'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InstrumentTable;