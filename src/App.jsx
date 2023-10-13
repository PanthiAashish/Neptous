import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.name}</li> // Adjust property name based on your schema
        ))}
      </ul>
    </div>
  );
}

export default App
