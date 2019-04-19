import React from 'react'
import { createStore } from './store'

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

const store = createStore(reducer)

store.dispatch({})
console.log(store.getState())

store.dispatch({type: 'SET', users: []})
console.log(store.getState())

const App = (props) => (
  <div>

  </div>
)

export default App
