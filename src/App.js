
import './App.css';
import React, { useState,useEffect } from 'react'
import {posts} from'./data/data'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes,Route, Navigate} from 'react-router-dom'
import Post from './pages/Post';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3500/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <>
    <Navbar user={user} />
   <Routes>
    <Route path='/' element={<Home posts={posts} />} exact />
    <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
    <Route path='/post/:id' element={user ? <Post posts={posts} /> : <Navigate to='/login' />} exact />
    
   </Routes>
    </>
  )
}

export default App