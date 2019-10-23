import React, { Component, Suspense } from "react";
import "./App.css";
import LinkComponent from "./components/root/link";
import Routes from "./components/root/route";
class App extends Component {
  render() {
    return (
      <div className="App">
        <LinkComponent />
        <Suspense fallback={<h4>Loading ...</h4>}>
          <Routes />
        </Suspense>
      </div>
    );
  }
}
export default App;
