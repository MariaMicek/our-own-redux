let state = {}

const getState = () => state

const dispatch = (newAction) => {
    const newState = reducer(state, newAction)
    state = newState
    return newAction
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET':
        return{
            ...state,
            users: action.users
        }
        default:
        return state
    }
}

export const store = {
    getState,
    dispatch
}