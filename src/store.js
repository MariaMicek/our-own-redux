const store = {}

export const getState = () => store

export const set = (key, value) => store[key] = value

export const get = (key) => store[key]