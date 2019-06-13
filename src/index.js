import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
// import store from './redux-config/store/index';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./redux-config/store/index";


const AppWrapper = () => {
    return (
        <div>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </div>
    )
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
serviceWorker.unregister();
