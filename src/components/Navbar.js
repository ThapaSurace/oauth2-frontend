import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:3500/auth/logout", "_self");
  };
  return (
    <>
      <div className=" bg-slate-800 p-5">
        <div className="flex justify-between max-w-6xl mx-auto items-center">
          <Link to='/'><h1 className="text-4xl text-white font-semibold">Blog</h1></Link>

          {user ? (
            <ul className="flex gap-5  items-center text-white font-semibold">
              <li>
                <img
                  src={user.photos[0].value}
                  alt=""
                  className="rounded-full w-8"
                />
              </li>
              <li>{user.displayName}</li>
              <li onClick={logout} className='cursor-pointer'>Logout</li>
            </ul>
          ) : (
           <Link to='/login'><span className="text-white font-semibold">Login</span></Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
