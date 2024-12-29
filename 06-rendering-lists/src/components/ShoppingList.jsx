/* eslint-disable react/prop-types */
export default function ShoppingList({ products }) {
    const listItems = products.map((product) => (
        <li
            key={product.id}
            style={{
                color: product.isFruit ? "magenta" : "darkgreen",
                fontSize: "20px",
            }}
        >
            {product.title}
        </li>
    ));

    return <ul>{listItems}</ul>;
}
