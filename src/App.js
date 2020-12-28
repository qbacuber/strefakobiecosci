import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Pages/Home'
import PriceList from './components/Pages/PriceList'
import Contact from './components/Pages/Contact'
import NotFound from './components/Pages/NotFound'
import Header from './components/Header/Header'

import './App.css';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path component={Home} />
        <Route path component={PriceList} />
        <Route path component={Contact} />
        <Route component={NotFound} /> 
      </Switch>
    </BrowserRouter>
    </>
  );
}
