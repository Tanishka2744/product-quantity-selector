import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  const product = {
    name: "Premium Wireless Headphones",
    price: 2499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    description: "Experience crystal-clear sound with ultimate comfort.",
  };

  const totalPrice = product.price * quantity;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    setCartMessage("");
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
    setCartMessage("");
  };

  const addToCart = () => {
    setCartMessage(
      `${quantity} ${quantity === 1 ? "item" : "items"} added to your cart!`
    );
  };

  return (
    <main className="app">
      <header className="navbar">
        <a href="#home" className="logo" id="home">
          <span>✦</span> Shoply
        </a>

        <div className="nav-label">
          <span>●</span> Your Shopping Space
        </div>
      </header>

      <section className="page-content">
        <div className="intro">
          <p className="eyebrow">SIMPLE SHOPPING EXPERIENCE</p>
          <h1>
            Pick your product,
            <br />
            <span>choose your quantity.</span>
          </h1>
          <p>Great products, simple choices. Start shopping today!</p>
        </div>

        <section className="product-card">
          <div className="product-image">
            <span className="product-badge">BEST SELLER</span>
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-details">
            <p className="category">AUDIO COLLECTION</p>

            <h2>{product.name}</h2>

            <p className="description">{product.description}</p>

            <div className="rating">
              <span>★★★★★</span>
              <small>Premium sound experience</small>
            </div>

            <div className="price">
              ₹{product.price.toLocaleString("en-IN")}
              <span> / piece</span>
            </div>

            <div className="quantity-section">
              <p>SELECT QUANTITY</p>

              <div className="quantity-control">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span aria-live="polite">{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="total-section">
              <span>Total Price</span>
              <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
            </div>

            <button
              type="button"
              className="cart-button"
              onClick={addToCart}
            >
              🛒 Add to Cart
              <span>→</span>
            </button>

            {cartMessage && (
              <p className="cart-message" role="status">
                ✓ {cartMessage}
              </p>
            )}

            <p className="delivery-note">
              ✨ Enjoy your shopping experience!
            </p>
          </div>
        </section>

        <footer className="footer">
          <span>✦</span> Good choices, great experiences.
        </footer>
      </section>
    </main>
  );
}

export default App;