import * as React from "react";
import { connect } from "react-redux";
import { CounterStateType } from "../../store/counter/reducer";
import { Increment, Decrement } from "../../store/counter/action";
import * as style from "./Counter.scss";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface propsType {
  counter: number;
  Increment: () => { type: string };
  Decrement: () => { type: string };
}

const Counter = (props: propsType) => {
  return (
    <div className={style.counter}>
      <div className={style.dec} onClick={props.Decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className={style.count}>
        <span>{props.counter}</span>
      </div>
      <div className={style.inc} onClick={props.Increment}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: CounterStateType) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  Increment,
  Decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
