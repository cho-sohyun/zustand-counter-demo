import "./App.css";
import { useCounterStore } from "./stores/counterStore";

function App() {
  const { count, increase, increaseBy, decrease, decreaseBy } =
    useCounterStore();
  return (
    <div className="App">
      <h1>COUNT : {count}</h1>
      <div className="increase">
        <button onClick={increase}>1 증가</button>
        <button onClick={() => increaseBy(10)}>10 증가</button>
      </div>
      <div className="decrease">
        <button onClick={decrease}>1 감소</button>
        <button onClick={() => decreaseBy(10)}>10 감소</button>
      </div>
    </div>
  );
}

export default App;
