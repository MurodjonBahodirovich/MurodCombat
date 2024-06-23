import { useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Reset from "./components/Reset/Reset";

// const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0);

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
