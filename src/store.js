export const createStore = (reducer) => {
    let state = {}

    const getState = () => state

    const dispatch = (newAction) => {
        const newState = reducer(state, newAction)
        state = newState
        return newAction
    }

    const store = {
        getState,
        dispatch
    }

    return store
}

