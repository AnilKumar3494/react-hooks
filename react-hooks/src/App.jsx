import LearninguseState from "./LearninguseState";

function App() {
  let count = 0;
  return (
    <div>
      <LearninguseState />
      <button>Increment</button>
      <button>Decrement</button>
      <p>Counter: {count}</p>
    </div>
  );
}

export default App;
