export interface CounterStateType {
  counter: number;
}

export interface CounterActionType {
  type: string;
}

const initialCounterState: CounterStateType = {
  counter: 0
};

export const counterStore = (state = initialCounterState, action: CounterActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: (state.counter - 1 < 0) ? 0 : state.counter - 1
      };
    default:
      return state;
  }
};
