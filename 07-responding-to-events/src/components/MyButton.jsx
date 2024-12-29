export default function MyButton() {
    function handleClick() {
        alert("You clicked me!");
    }

    return (
        <>
            <h1>Responding to Events</h1>
            <button onClick={handleClick}>Click me</button>
        </>
    );
}
