import "./App.css";
import Hi from "./components/class_comp";
import {Hello} from "./components/functional_comp";
import sayHello from "./ESjavascript/letConst";
import fullname from "./components/props";

function App() {
  return (
    <div className="App">
      <Hello />
      <sayHello />
      <Hi />
      <fullname />
    </div>
  );
}

export default App;
