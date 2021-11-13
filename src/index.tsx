import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components";

const App = () => {
  return (
    <>
      <h1>UI - Library</h1>
      <Button onClick={() => alert(2)} primary>
        Button
      </Button>

      <div>
        <Button onClick={() => alert(2)} backgroundColor="red" rounded primary>
          Button
        </Button>
      </div>

      <div>
        <Button onClick={() => alert(2)} disable backgroundColor="red" primary>
          Button
        </Button>
      </div>
      <div>
        <Button onClick={() => alert(2)} rounded disable primary>
          Button
        </Button>
      </div>

      <div>
        <Button
          onClick={() => alert(2)}
          backgroundColor="red"
          ghost
          styles={{ color: "#000" }}
          primary
        >
          Button
        </Button>
      </div>

      <div>
        <Button
          onClick={() => alert(2)}
          rounded
          ghost
          styles={{ color: "#000" }}
          primary
        >
          Button
        </Button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
