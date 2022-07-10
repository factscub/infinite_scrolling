import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import { Route, Routes } from "react-router-dom";
import context from './contextApi/ContextApi'
import Login from './pages/login/Login';

////////////////////////
//                    //
//   USERNAME : foo   //
//   PASSWORD : bar   //
//                    //   
////////////////////////

function App() {
  const [auth, setAuth] = useState(false)
  const location = useLocation()

  return (
    <context.Provider value={{ auth, setAuth }}>
      <div className="App">

        {/* HEADER WILL BE SHOWN IN EVERY PAGE */}
        <Header auth={auth} setAuth={setAuth} />
        
        {/* FIRST TIME USER ENTERS THE WEBPAGE , THIS MESSAGE IS SHOWN. */}
        {
          (!auth && location.pathname === '/') && <p className='error'>Please login...</p>
        }

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>

      </div>
    </context.Provider>
  );
}

export default App;
