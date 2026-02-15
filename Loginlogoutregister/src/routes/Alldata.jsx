import React from 'react'
import axios from 'axios';
import Chai from './Chai';
import { useEffect, useState } from 'react';

const Alldata = () => {
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
    <div>
      <h1 className='text-4xl bg-green-800 p-2.5 m-5 text-white'>Users List</h1>
           <h3>
            {response.data.map((user, index) => (
              <>
              <Chai key={index} user={user} />
              </>
            ))}
           </h3>
    </div>
  )
}


export default Alldata
