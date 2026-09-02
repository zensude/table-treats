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
    </main>
  );
}

export default App;