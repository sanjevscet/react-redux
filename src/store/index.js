import {createStore, combineReducers} from "redux";
import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";

const allReducers = combineReducers({
    person: personReducer,
    game: gameReducer
}); 

const initialStates = {
    game: {name: "Football"},
    person: {name: "Sanjeev"}
}

const store = createStore(allReducers, initialStates, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;