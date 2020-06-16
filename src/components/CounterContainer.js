import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch}) => 
<div>
  <div>{counter}</div>
  <button onClick={() => dispatch ({type: 'ADD 1'}) }>+1</button>
  <button onClick={() => dispatch ({type: 'ADD 10'}) }>+10</button>
  <button onClick={() => dispatch ({type: 'REMOVE 1'}) }>-1</button>
  <button onClick={() => dispatch ({type: 'REMOVE 10'}) }>-10</button>
  <button onClick={() => dispatch ({type: 'RESET'}) }>RESET</button>
</div>

export default connect(mapStateToProps)(CounterComponent);