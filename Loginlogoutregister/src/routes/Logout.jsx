import React from 'react'
function Logout({ handleLogout = () => { } }) {
  return (
    <div className="w-100 h-50 bg-green-400 mx-auto mt-20 rounded-lg flex flex-col gap-4 justify-center items-center">
        <h2 className="text-white text-xl hover:text-black">You have been logged out successfully!</h2>
    <button className="bg-violet-800 hover:bg-violet-400 text-white px-4 py-2 my-5 rounded-md" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;