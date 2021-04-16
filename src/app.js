import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize-css/normalize.css'; // Importando normalize.css do node_modules
import './styles/style.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));