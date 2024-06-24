import { useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Reset from "./components/Reset/Reset";

// const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(
    localStorage.getItem("count")
      ? JSON.parse(localStorage.getItem("count"))
      : 0
  );

  count > 0 && localStorage.setItem("count", JSON.stringify(count));

  // useEffect(() => {
  //   tg.ready();
  // }, []);

  return (
    <div className="container">
      <Header count={count} />
      <Body dispatch={setCount} count={count} />
      <Reset dispatch={setCount} />
    </div>
  );
}

export default App;
