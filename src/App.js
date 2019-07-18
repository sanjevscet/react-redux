import React from 'react';
import './App.css';
// import store from './store';
import update_person from './store/actions/personActions';
import update_game from './store/actions/gameActions';
import {connect} from "react-redux";


function App(props) {
  return (
    <div className="App">
      <h1>Redux Demo</h1>
      Person Name: {props.person.name}
      <button onClick={props.updatePerson}>Update Person</button>
      <br />
      Game Name: {props.game.name}
      <button onClick={props.updateGame}>Update Game</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    game: state.game,
    person: state.person
  }
}

const mapDispatchToProps = dispatch => {
  return {
     updateGame: () => {dispatch(update_game)},
     updatePerson: () => {dispatch(update_person)}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
