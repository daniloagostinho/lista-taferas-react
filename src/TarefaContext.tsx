import React, { createContext, useState, ReactNode } from 'react';

// Definindo o tipo para o contexto
interface TarefaContextType {
  tarefas: string[];
  adicionarTarefa: (tarefa: string) => void;
  removerTarefa: (index: number) => void;
}

// Criando o Contexto
export const TarefaContext = createContext<TarefaContextType | undefined>(undefined);

// Definindo o tipo para as props do Provider
interface TarefaProviderProps {
  children: ReactNode;
}

export const TarefaProvider: React.FC<TarefaProviderProps> = ({ children }) => {
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = (tarefa: string) => {
    if (tarefa.trim()) {
      setTarefas((prevTarefas) => [...prevTarefas, tarefa]);
    }
  };

  const removerTarefa = (index: number) => {
    setTarefas((prevTarefas) => prevTarefas.filter((_, i) => i !== index));
  };

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa, removerTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
};
