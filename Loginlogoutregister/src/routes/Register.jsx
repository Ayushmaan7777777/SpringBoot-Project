import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Register({handleRegister = () => { }}) {

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/newdb/register",formData);
      setResponse(res.data);
      if(res.data === true) {
        handleRegister(formData);
        console.log(formData);
      }else {
        alert("Registration failed. Username already exists or maybe you didn't fill all fields.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className='w-100 h-100 bg-green-400 mx-auto mt-20 rounded-lg'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center h-full'>
      <input name="userName" placeholder="Username" value={formData.userName} onChange={handleChange} className='bg-white p-2 rounded-md'/>
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className='bg-white p-2 rounded-md' />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className='bg-white p-2 rounded-md' />
      <button type="submit" className='bg-violet-800 hover:bg-violet-400 m-3 px-4 py-2 rounded-md text-white'>Register</button>
    </form>
    <div className="text-center mt-4">
     Already have an account? <NavLink to="/login" className="text-blue-600 hover:underline">Login here</NavLink>
    </div>
    </div>
  );
}

export default Register;