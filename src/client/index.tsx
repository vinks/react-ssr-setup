import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import App from '../shared/App.tsx';
import IntlProvider from '../shared/i18n/IntlProvider.tsx';
import { configureStore } from '../shared/store/index.ts';

const history = createHistory();
const store = configureStore({
    initialState: window.__PRELOADED_STATE__,
    middleware: [routerMiddleware(history)],
});

hydrate(
    <Provider store={store}>
        <Router history={history}>
            <IntlProvider>
                <App />
            </IntlProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
