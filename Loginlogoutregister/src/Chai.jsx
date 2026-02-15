import React from 'react'
import './Chai.css';
function Chai({ user }) {
  return (
    <div id='login-container'>
      <h5 >Username: {user.userName}</h5>
      <h5>Email: {user.email == null ? <i>null</i> : user.email}</h5>
      <h5>Password: {user.password == null ? <i>12345</i> : user.password}</h5>
    </div>
  );
}

export default Chai;