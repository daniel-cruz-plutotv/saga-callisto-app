// Libraries
import React from 'react';

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store/index';

// Components
import AppRouter from './components/router/AppRouter';

// styles
import './styles/main.scss';

const SagaApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

export default SagaApp;