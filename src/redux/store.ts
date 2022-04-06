import { Context, createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer/rootReducer';

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
