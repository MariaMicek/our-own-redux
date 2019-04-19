export const combineReducers = (reducersObjects) => {
    return (state, action) => {
        return (
            Object.entries(reducersObjects).reduce(
                (r, [reducerName, reducer]) => ({
                    ...r,
                    [reducerName]: reducer(state[reducerName], action)
                }), {}
            )
        )
    }
}

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

