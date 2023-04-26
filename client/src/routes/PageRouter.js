import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom';

import Home from '../view/Home';
import Login from '../view/Login'

const PageRouter = () => {
  let isUserAuthenticated = false;

  return (
    <Routes>
      { isUserAuthenticated &&
        <Route
          exact path='/'
          element={<Home />}
        />
      } <Route exact path='/' element={<Login />}/>
    </Routes>
  )
}

export default PageRouter