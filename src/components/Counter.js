import { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class Counter extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}
const mapStateToProps = (state) => ({ value: state.count.value });

const mapDispatchProps = { increment, decrement };
// 別の書き方
// const mapDispatchProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchProps)(Counter);

// import React, { useState } from 'react';
// // import { increment } from '../actions';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };
//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <div>count: {count}</div>
//       <button onClick={handleIncrement}>+1</button>
//       <button onClick={handleDecrement}>-1</button>
//     </>
//   );
// };

// export default Counter;
