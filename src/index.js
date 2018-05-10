import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Theme from './Theme.js';
import { css } from 'emotion';
import store from './store';

const className = css`
 font-family: 'Helvetica'
`;

const state = store.getState();

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<App className={className} {...state}/>
	</ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
