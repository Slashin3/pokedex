import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/App.css';
import './styles/PokemonList.css';
import './styles/Pagination.css';

const root = document.getElementById('root');
createRoot(root).render(<App />);
