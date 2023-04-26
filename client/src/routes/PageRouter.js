import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom';

import Home from '../view/Home';
import Login from '../view/Login'

const PageRouter = () => {
  let isUserAuthenticated = false;

  return (
    <Routes>
      <Route 
        exact path='/' 
        element={ isUserAuthenticated ? (<Home />) : (<Login />) }
      />
    </Routes>
  )
}

export default PageRouter