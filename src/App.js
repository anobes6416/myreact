import "./App.css";
import Hi from "./components/class_comp";
import {Hello} from "./components/functional_comp";

function App() {
  return (
    <div className="App">
      <Hello />
      <Hi />
    </div>
  );
}

export default App;
