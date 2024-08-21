import React, { useEffect, useState } from 'react';
import './App.scss';

interface ApiResponse {
  id: string;
  name: string;
  description: string;
  age: number;
  image: string;
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initData = window.Telegram.WebApp.initDataUnsafe;

    console.log('WebAppInitData:', initData);

    fetch('https://swiperapp.ru/next')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="App">
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} style={{ width: '200px', height: '200px' }} />
      <p>Age: {data.age}</p>
      <p>{data.description}</p>
    </div>
  );
}

export default App;
