import { UPDATE_PERSON } from "../actions/personActions";


const personReducer = (state = {}, {type, payload}) => { 
    switch (type) {
        case UPDATE_PERSON:
            return Object.assign({}, state, {name:payload})
            //return {name: payload, email: state.email};
        default:
            return state;
    }
}

export default personReducer;