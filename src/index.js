import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider } from 'material-ui/styles';

import Events from './components/Events';
import EventsNew from './components/EventsNew';
import EventsShow from './components/EventsShow';
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

// import CounterContext from './contexts/counter';
// import ContextCounter from './components/ContextCounter';
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);

//     this.state = {
//       count: 0,
//       increment: this.increment,
//       decrement: this.decrement,
//     };
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }
//   decrement() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <CounterContext.Provider value={this.state}>
//         <ContextCounter />
//       </CounterContext.Provider>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));
