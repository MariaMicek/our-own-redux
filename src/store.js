let state = {}

const getState = () => state

const dispatch = (newAction) => {
    const newState = reducer(state, newAction)
    state = newState
    return newAction
}

const reducer = (state, action) => {
    return {
        users: []
    }
}

export const store = {
    getState,
    dispatch
}