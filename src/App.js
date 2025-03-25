import React, { useState } from "react";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Товар 1", description: "Описание товара 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Товар 2", description: "Описание товара 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Товар 3", description: "Описание товара 3", image: "https://via.placeholder.com/150" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity }]);
    setSelectedProduct({ ...product, inCart: true });
  };

  return (
    <div className="p-4">
      {/* Корзина в правом верхнем углу */}
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Каталог</h1>
        <Button variant="outline" onClick={() => alert("Открытие корзины")}>
          <ShoppingCart className="mr-2" /> {cart.length}
        </Button>
      </div>

      {/* Главная страница с товарами */}
      {!selectedProduct ? (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="cursor-pointer" onClick={() => setSelectedProduct(product)}>
              <CardContent>
                <img src={product.image} alt={product.name} className="w-full" />
                <h2 className="font-bold mt-2">{product.name}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Страница товара
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full mb-4" />
          <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
          <p className="text-gray-500">{selectedProduct.description}</p>

          {/* Выбор количества */}
          <div className="flex items-center my-4">
            <Button variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
            <span className="mx-4">{quantity}</span>
            <Button variant="outline" onClick={() => setQuantity(quantity + 1)}>+</Button>
          </div>

          {/* Добавление в корзину */}
          {!selectedProduct.inCart ? (
            <Button className="w-full" onClick={() => addToCart(selectedProduct)}>Добавить в корзину</Button>
          ) : (
            <Button className="w-full" onClick={() => alert("Перейти в корзину")}>Перейти в корзину</Button>
          )}
        </motion.div>
      )}
    </div>
  );
}
