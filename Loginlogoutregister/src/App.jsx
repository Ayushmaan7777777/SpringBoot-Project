import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Chai from './Chai';

function App() {
  const [response, setResponse] = useState({data: []});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/newdb/getall');
        setResponse(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <>
    <h1>Users List</h1>
     <h3>
      {response.data.map((user, index) => (
        <>
        <Chai key={index} user={user} />
        </>
      ))}
     </h3>
    </>
  ) 
}

export default App
