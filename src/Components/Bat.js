import React, { useState } from 'react'
import {connect} from 'react-redux'

function Bat(props) {

  return (
    <div>
      <h1>Bats: {props.bats}</h1>
      <button onClick={props.buyBat} >Buy Bat</button>
    </div>
  )
}

// We can use this function to map the values from global state to the particular functions
// The state returned can be accessed via props passed in function
const mapStateToProps = (state) => {
  return {
    bats: state.bat.bats
  }
}

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
// the we got that object and called Bat function
export default connect(mapStateToProps, mapDispatchToProps)(Bat)
