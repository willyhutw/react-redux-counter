import * as React from "react";
import Counter from "./components/Counter/Counter";
import Posts from "./components/Posts/Posts";

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Counter />
        <Posts />
      </React.Fragment>
    );
  }
}

export default App;
