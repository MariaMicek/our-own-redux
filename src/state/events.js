const SET = 'events/SET'

export const setEventsActionCreator = (events) => ({
    type: SET,
    events
})

const initialState = {
    events: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                events: action.events
            }
        default:
            return state
    }
}