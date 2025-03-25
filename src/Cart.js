import React from 'react';

export default function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h1 className="text-xl font-bold">Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <h2 className="product-title">{item.name}</h2>
              <p className="product-description">Количество: {item.quantity}</p>
              <button className="btn" onClick={() => removeFromCart(item)}>Удалить</button>
            </div>
          ))}
        </div>
      )}
      <div>
        <button className="btn">Оформить заказ</button>
      </div>
    </div>
  );
}
