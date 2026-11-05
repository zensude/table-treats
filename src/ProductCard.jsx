function ProductCard({ product, onAddToCart }) {
    return (
        <article className="product-card">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <p className="product-price">₺{product.price}</p>
            <button
                className="add-to-cart-button"
                type="button"
                onClick={() => onAddToCart(product)}
            >
                Add to cart
            </button>
        </article>
    );
}

export default ProductCard;