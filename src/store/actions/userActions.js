export const UPDATE_USER = "UPDATE_USER";
// export const FETCH_USER = "UPDATE_USER";

const fetch_user = (dispatch) => {
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    // .then(res => console.log(res.data))
    .then(res => dispatch({type: UPDATE_USER, payload: res.data}))
}

// const update_user = {type: UPDATE_USER, payload: 'Cricket'};

export default fetch_user;