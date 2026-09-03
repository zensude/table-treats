import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="navbar">
        <a className="brand" href="/">
          Table Treats
        </a>

        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">About us</a>
        </nav>

        <button className="cart-button" type="button">
          Cart (0)
        </button>
      </header>

      <section className="hero-section">
        <p className="eyebrow">HOMEMADE FOR EVERY GATHERING</p>

        <h1>Beautiful bites for memorable moments.</h1>

        <p className="hero-text">
          Order homemade savory and sweet treats for your next celebration.
        </p>

        <button className="primary-button" type="button">
          Explore the menu
        </button>
      </section>
      <section className="menu-section" id="menu">
        <p className="eyebrow">OUR MENU</p>

        <h2>Made to share, made with care.</h2>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <p>{product.category}</p>
              <h3>{product.name}</h3>
              <p>₺{product.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
const products = [
  {
    id: 1,
    name: "Stuffed Grape Leaves",
    category: "Savory",
    price: 320,
  },
  {
    id: 2,
    name: "Çiğ Köfte Platter",
    category: "Savory",
    price: 280,
  },
  {
    id: 3,
    name: "Mini Celebration Cake",
    category: "Sweet",
    price: 450,
  },
  {
    id: 4,
    name: "Chocolate Chip Cookies",
    category: "Sweet",
    price: 220,
  },
];

export default App;