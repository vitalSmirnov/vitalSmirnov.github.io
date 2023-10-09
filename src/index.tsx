import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./store/store";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <div className={'App'}>
                <App/>
            </div>
        </Provider>
    </BrowserRouter>
);

