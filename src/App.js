import { useState, useContext } from 'react';
import styled from 'styled-components';
import { TarefaContext } from './TarefaContext';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const TarefaList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TarefaItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
`;

const RemoverButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;

function App() {
  const [tarefa, setTarefa] = useState('');
  const { tarefas, adicionarTarefa, removerTarefa } = useContext(TarefaContext);

  const handleAdicionarTarefa = () => {
    adicionarTarefa(tarefa);
    setTarefa('');
  };

  return (
    <AppContainer>
      <h1>Lista de Tarefas</h1>
      <InputContainer>
        <Input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <Button onClick={handleAdicionarTarefa}>Adicionar</Button>
      </InputContainer>
      <TarefaList>
        {tarefas.map((t, index) => (
          <TarefaItem key={index}>
            {t}
            <RemoverButton onClick={() => removerTarefa(index)}>Remover</RemoverButton>
          </TarefaItem>
        ))}
      </TarefaList>
    </AppContainer>
  );
}

export default App;
