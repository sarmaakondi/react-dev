import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((previousCount) => previousCount + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <br />
            <br />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

export default App;
