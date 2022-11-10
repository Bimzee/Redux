# Redux
---
## Useful Links
---
https://redux-toolkit.js.org/introduction/getting-started  
https://redux.js.org/usage/usage-with-typescript  

## Action:
---
An action is a plain JavaScript object that has a type field\
Eg:   
```javascript 
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
} 
```
## ActionCreator
---
An action creator is a function that creates and returns an action object  
```javascript
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
} 
``` 
## Reducers
---
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state:   
think of a reducer as an event listener which handles events based on the received action (event) type.
` (state, action) => newState. `
```javascript
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

## Store
---
The current Redux application state lives in an object called the store.  
The store is created by passing in a reducer, and has a method called getState that returns the current state value

```javascript 
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({ reducer: counterReducer })
console.log(store.getState())
// {value: 0}
```

## Dispatch
---
The only way to update the state is to call ` store.dispatch() ` and pass in an action object.  
```javascript
store.dispatch({ type: 'counter/increment' })
console.log(store.getState())
// {value: 1}
```  
## Selectors
---
Selectors are functions that know how to extract specific pieces of information from a store state value.
```javascript
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

## Todo
---
React ContextAPI
React useReducer
