import React from "react";
import { Counter, Title, Button } from "./components/counter";

const App = () => (
  <div>
    <Counter>
      <Button type="increment" />
      <Title>
        {(click) => (
          <div>
            <h1>{click}</h1>
          </div>
        )}
      </Title>
      <Button type="decrement" />
    </Counter>
  </div>
);

export default App;
