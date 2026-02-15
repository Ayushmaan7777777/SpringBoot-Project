import React from 'react'

function Chai({ user }) {
  return (
    <div id='login-container' className='my-2 bg-blue-400 border-2 w-75% h-25 align-center rounded-lg p-2'>
      <h5 >Username: {user.userName}</h5>
      <h5>Email: {user.email == null ? <i>null</i> : user.email}</h5>
      <h5>Password: {user.password == null ? <i>12345</i> : user.password}</h5>
    </div>
  );
}

export default Chai;