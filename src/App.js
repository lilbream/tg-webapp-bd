import React, { useState, useEffect } from "react";
import './App.css';
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Cart from './Cart'; // Импортируем корзину
import supabase from './supabaseClient';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartPage, setIsCartPage] = useState(false);

  // Функция для получения товаров из базы данных
  const getProductsFromDB = async () => {
    const { data, error } = await supabase
      .from('products') // Таблица с товарами в Supabase
      .select('*');

    if (error) {
      console.error('Ошибка при получении данных:', error);
      return [];
    }

    setProducts(data); // Устанавливаем товары в состояние
  };

  useEffect(() => {
    getProductsFromDB(); // Загружаем товары при монтировании компонента
  }, []);

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
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
                  <img src={product.image_url} alt={product.name} className="product-image" />
                  <h2 className="product-title">{product.name}</h2>
                  <p className="product-description">{product.description}</p>
                  <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                    Добавить в корзину
                  </button>
                </div>
              ))
            ) : (
              <p>Загрузка товаров...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
