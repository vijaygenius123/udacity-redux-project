import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configStore(initalState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose
    return createStore(
        rootReducer,
        initalState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}