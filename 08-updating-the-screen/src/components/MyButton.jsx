import { useState } from "react";

export default function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((previousCount) => previousCount + 1);
    }

    return <button onClick={handleClick}>Clicked {count} times</button>;
}
