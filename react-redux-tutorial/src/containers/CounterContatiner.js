import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
const CounterContatiner2 = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};
const CounterContatiner = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

const mapStateToProps = state => ({
  number: state.counter.number
});
const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  }
});
//export default connect(mapStateToProps, mapDispatchToProps)(CounterContatiner);
export default CounterContatiner;
