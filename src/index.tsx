import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TarefaProvider } from './TarefaContext';

ReactDOM.render(
  <React.StrictMode>
    <TarefaProvider>
      <App />
    </TarefaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
