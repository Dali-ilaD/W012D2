import csrfFetch from './csrf.js';

const CURRENT_SESSION = 'CURRENT_SESSION';
const REMOVE_SESSION = 'REMOVE_SESSION';

const setSession = (user) => ({
    type: CURRENT_SESSION,
    user
})

const removeSession = (user) => ({
    type: REMOVE_SESSION,
    user
})

// export const loginUser = user => async dispatch => {
//     let res = await csrfFetch('/api/session', {
//         method: 'POST',
//         body: JSON.stringify(user)
//     });
//     let data = await res.json();
//     debugger
//     sessionStorage.setItem('currentUser', JSON.stringify(data.user));
//     dispatch(receiveUser(data.user))
// }

export const login = (credential, password) => async dispatch => {
    const res = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({credential, password})
    });
    let data = await res.json();
    dispatch(setSession(data.user));
}

const sessionReducer = (state = {}, action) => {
    const nextState = {...state};
    switch (action.type){
        case CURRENT_SESSION:
            nextState[action.user.id] = action.user;
            return nextState;
        case REMOVE_SESSION:
            delete nextState[action.user.id];
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer;