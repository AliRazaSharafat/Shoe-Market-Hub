import React from 'react';
import Appbar from './components/MUI/Appbar';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Product from './components/Product/Product';
import ProductItem from './components/Product/ProductItem/ProductItem';
import './App.css';

function App() {
  return (
    <div >
      <Appbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route path="/product/:id" component={ProductItem} />
        <Route path="/about" component={AboutUs} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
