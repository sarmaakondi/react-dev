import MyButton from "./components/MyButton";
import "./App.css";

function App() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <br />
            <br />
            <MyButton />
        </div>
    );
}

export default App;
