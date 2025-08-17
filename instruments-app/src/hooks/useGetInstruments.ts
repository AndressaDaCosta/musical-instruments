import { useState, useEffect } from 'react';
import api from '../services/api';
import type { Instrument } from '../types/instrument';

export const useGetInstruments = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        setLoading(true);
        const response = await api.get<Instrument[]>('/equipamentos');
        setInstruments(response.data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar instrumentos');
        console.error('Erro ao buscar instrumentos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstruments();
  }, []);

  return { instruments, loading, error };
};