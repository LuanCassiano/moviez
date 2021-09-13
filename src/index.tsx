import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

import App from './App';

const Root: React.FC = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#0e0f15" barStyle="light-content" />
            <App />
        </Provider>
    );
};

export default Root;
