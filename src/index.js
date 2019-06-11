import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './redux-config/store/index';


const AppWrapper = () => {
    return (
        <div>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>
    )
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
serviceWorker.unregister();
