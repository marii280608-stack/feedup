
import React, { useState } from 'react';

// Данные о товарах (в реальности приходят с API)
const PRODUCTS = [
  { id: 1, name: 'Лаваш Говяжий', price: 28000, desc: 'Мясо, томаты, соус', img: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Гамбургер', price: 22000, desc: 'Котлета, сыр, зелень', img: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Чизбургер', price: 25000, desc: 'Двойной сыр, котлета', img: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Хот-дог', price: 15000, desc: 'Сосиска, горчица, кетчуп', img: 'https://via.placeholder.com/150' },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Навигация */}
      <nav className="bg-white shadow-md sticky top-0 z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-500">FEED UP</h1>
          <div className="flex gap-4 items-center">
            <span className="cursor-pointer font-medium">Меню</span>
            <div className="relative bg-yellow-400 p-2 rounded-full cursor-pointer">
              🛒 <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1.5">{cart.length}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Герой-секция */}
      <header className="bg-yellow-400 py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Вкусно. Быстро. С душой.</h2>
        <p className="text-lg">Лучший фаст-фуд в твоем городе</p>
      </header>

      {/* Сетка товаров */}
      <main className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-bold mb-6">Наше Меню</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAdd={() => addToCart(product)} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// Компонент карточки товара
function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col">
      <img src={product.img} alt={product.name} className="rounded-xl mb-4 w-full h-40 object-cover" />
      <h4 className="font-bold text-lg">{product.name}</h4>
      <p className="text-gray-500 text-sm mb-4 flex-grow">{product.desc}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-yellow-600">{product.price.toLocaleString()} сум</span>
        <button 
          onClick={onAdd}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-10 h-10 rounded-full transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;