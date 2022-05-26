import { useContext } from "react";
import { AppContext } from "./AppContext/AppContextProvider";
import Button from "./Button/Button";
import Counter from "./Counter/Counter";
import "./styles.css";

export default function App() {
  const [theme, toggleTheme] = useContext(AppContext);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button text="THEME" />
      <br />
      <button onClick={toggleTheme}>Toggle</button>
      <Counter />
    </div>
  );
}
