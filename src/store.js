const state = {}

const getState = () => state

const set = (key, value) => state[key] = value

const get = (key) => state[key]

export const store = {
    getState,
    set,
    get,
}