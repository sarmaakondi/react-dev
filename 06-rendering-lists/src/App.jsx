import ShoppingList from "./components/ShoppingList";
import "./App.css";
import { products } from "./products";

function App() {
    return (
        <div>
            <ShoppingList products={products} />
        </div>
    );
}

export default App;
