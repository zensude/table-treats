function ProductCard({ product }) {
    return (
        <article className="product-card">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <p className="product-price">₺{product.price}</p>
        </article>
    );
}

export default ProductCard;