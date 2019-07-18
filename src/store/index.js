import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  person: personReducer,
  game: gameReducer,
  users: userReducer
});

const middleware = [thunk];

const initialStates = {
  game: { name: "Football" },
  person: { name: "Sanjeev", email: "sanjeevscet@gmail.com"},
  users: []
};

const store = createStore(
  allReducers,
  initialStates,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// const store = createStore(
//   allReducers,
//   initialStates,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
