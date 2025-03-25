import React, { useState } from "react";
import './App.css';
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Cart from './Cart'; // Импортируем корзину

const products = [
  { id: 1, name: "Товар 1", description: "Описание товара 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Товар 2", description: "Описание товара 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Товар 3", description: "Описание товара 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Товар 4", description: "Описание товара 4", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Товар 5", description: "Описание товара 5", image: "https://via.placeholder.com/150" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartPage, setIsCartPage] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity }]);
    setSelectedProduct({ ...product, inCart: true });
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="App">
      {isCartPage ? (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      ) : (
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <h1 className="text-xl font-bold">Каталог</h1>
            <button className="btn-cart" onClick={() => setIsCartPage(true)}>
              Корзина ({cart.length})
            </button>
          </div>

          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}