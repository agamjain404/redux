# Redux

```
Redux is nothing but a state management library.

Reducer:- It is a normal component. Waht it does is it defines the state. 
For ex:- we need to create state of bat, then the reducer can act as a component to initalise the state. Liek given in provided syntax
const BatReducer = (state = initialState) => {
    return state;
}
Here we are giving inital state to assign inital value in state


Store :- We caa create a global store in react with the help of createStore method. In which we can put our reducer. In this way we put reducer in store and in reducer we had initailised a state of bats.
import { createStore } from 'redux';
import BatReducer from './batReducer';

const store = createStore(BatReducer);



Now we need to wrap the components who are going to use redux using the provider method and store
Understand mapStateToProps and connect from Bat.js
// We can use this function to map the values from global state to the particular functions
// The state returned can be accessed via props passed in function
The function name will always be same and it can't be changed
Basically the value we want from store in component can be taken with the help of mapStateToProps
const mapStateToProps = (state) => {
  return {
    bats: state.bats
  }
}

// Connect is a higher order component
// It gives state to mapStateToProps
// In connect we run mapStateToProps and then it returns state object
// the we got that object and called Bat function
export default connect(mapStateToProps)(Bat)

Action:- Action is nothing but a normal Javascript object.
Syntax = {
    type: string, // The action user going to take will be given in type
    payload: {} //payload is optional
}
Example :-
pass action object in reducer
const BatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_BAT':
            return {
                ...state,
                bats: state.bats -1
            }
        default:
            return state;
    }
}

Dispatch :- Dispatch is a fucntion which passes action to reducer and updates the state
See Bat.js for better understanding
// mapDispatchTopProps is used when we want to change the state from component
// Here we declare function in which we call dispatch function
// Now dispatch function calls our reducer with action and accordingly updates the state from reducer
// dispatch function is been taken from connect method itself
// And function uses these method with the help of props
const mapDispatchToProps = (dispatch) => {
  return {
    buyBat: () =>  dispatch({ type: "BUY_BAT" })
  }
}

// Connect is a higher order component
// It gives state to mapStateToProps
// In connect we run mapStateToProps and then it returns state object
// In connect we run mapDispatchToProps and then it provides dispatch function
// the we got that object and functions and then called Bat function with props
export default connect(mapStateToProps, mapDispatchToProps)(Bat)


<!-- Combinint reducers -->
// If there is single reducer then it can be done easily like this
// const store = createStore(BatReducer, composeWithDevTools());

// IF multiple reducers are there then need to use rootReducer
const store = createStore(rootReducer, composeWithDevTools());

<!-- Root Reducer will cobine the reducers in following way -->
import { combineReducers } from "redux";
import BatReducer from "./batReducer";
import BallReducer from "./ballReducer";

const rootReducer = combineReducers({
    bat: BatReducer,
    ball: BallReducer
})

export default rootReducer;

<!-- This will also update the state object in following way -->
{
    bat: {
        bats: 50
    },
    ball: {
        balls: 50
    }
}

<!-- To see how to send payload please cleck Ball.js implementation -->
```