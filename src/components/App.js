import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, setCounter /*, reset*/ } from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state//i like this better
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onSetCounter: (evt) => {
      console.log('event? in the mapDispatcher')
      console.log(evt)
      //no idea if this is the best?
      const pass_the_data = document.getElementById('tagSetCounter').value;
      console.log(pass_the_data);
      return dispatch(setCounter(pass_the_data));
    }
    //onReset: () => dispatch(reset())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);