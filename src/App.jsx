import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>Shad button</Button>
    </>
  );
}

export default App;