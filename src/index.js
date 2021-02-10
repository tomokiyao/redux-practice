import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider } from 'material-ui/styles';

import './index.css';
import Events from './components/Events';
import EventsNew from './components/EventsNew';
import EventsShow from './components/EventsShow';

import reportWebVitals from './reportWebVitals';
import reducers from './reducers';

const enhander =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducers, enhander);

ReactDOM.render(
  <MuiThemeProvider>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route path="/" component={Events} />
          <Route path="/events" component={Events} />
        </Switch>
      </BrowserRouter>
    </Provider>
    {/* </React.StrictMode> */}
  </MuiThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
