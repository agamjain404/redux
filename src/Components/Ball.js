import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyBall } from '../redux/ballActions';

function Ball(props) {
  
  const [qty, setQty] = useState(1);

  return (
    <div>
      <h1>Balls: {props.balls}</h1>
      <input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/>
      <button onClick={() =>props.buyBall(qty)}>Buy Ball</button>
      <button onClick={props.sellBall}>Sell BAll</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        balls: state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Action creator : Like we can define functions to get action
        // In those functions we can do some sort of preprocessing or something
        buyBall: (qty) => dispatch(buyBall(qty)),
        sellBall: () => dispatch({ type: 'SELL_BALL' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ball)
