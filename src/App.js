import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Pages/Home'
import PriceList from './components/Pages/PriceList'
import Contact from './components/Pages/Contact'
import NotFound from './components/Pages/NotFound'
import Header from './components/Header/Header'

import {ContentPage} from './components/styles/style'

import './App.css';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <ContentPage>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cennik" component={PriceList} />
          <Route path='/kontakt' component={Contact} />
          <Route component={NotFound} /> 
        </Switch>
      </ContentPage>
    </BrowserRouter>
    </>
  );
}
