import { createContext, useState } from 'react';

// Criando o Contexto
export const TarefaContext = createContext();

// Criando o Provider
export function TarefaProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    if (tarefa.trim()) {
      setTarefas((prevTarefas) => [...prevTarefas, tarefa]);
    }
  };

  const removerTarefa = (index) => {
    setTarefas((prevTarefas) => prevTarefas.filter((_, i) => i !== index));
  };

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa, removerTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
}
