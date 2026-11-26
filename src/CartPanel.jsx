function CartPanel({ items, total, onAdd, onRemove, onClear, onClose }) {
    const groupedItems = [];

    items.forEach((item) => {
        const existingItem = groupedItems.find(
            (group) => group.product.id === item.id
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            groupedItems.push({ product: item, quantity: 1 });
        }
    });

    return (
        <div className="cart-overlay" onClick={onClose}>
            <aside
                className="cart-panel"
                aria-label="Shopping cart"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="cart-header">
                    <h2>Your cart</h2>
                    <button
                        className="cart-close"
                        type="button"
                        aria-label="Close cart"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                {groupedItems.length === 0 ? (
                    <p className="cart-empty">Your cart is empty.</p>
                ) : (
                    <ul className="cart-list">
                        {groupedItems.map(({ product, quantity }) => (
                            <li className="cart-item" key={product.id}>
                                <div>
                                    <p className="cart-item-name">{product.name}</p>
                                    <p className="cart-item-price">
                                        ₺{product.price * quantity}
                                    </p>
                                </div>

                                <div className="quantity-controls">
                                    <button
                                        type="button"
                                        aria-label={`Remove one ${product.name}`}
                                        onClick={() => onRemove(product.id)}
                                    >
                                        −
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        type="button"
                                        aria-label={`Add one ${product.name}`}
                                        onClick={() => onAdd(product)}
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="cart-footer">
                    <span>Total</span>
                    <strong>₺{total}</strong>
                </div>

                {groupedItems.length > 0 && (
                    <button
                        className="clear-cart-button"
                        type="button"
                        onClick={onClear}
                    >
                        Clear cart
                    </button>
                )}
            </aside>
        </div>
    );
}

export default CartPanel;