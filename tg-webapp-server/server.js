import express from 'express';
import cors from 'cors';
import supabase from './supabaseClient.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Функция для получения товаров
async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }

  return data;
}

// API-роут для получения списка товаров
app.get('/products', async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
