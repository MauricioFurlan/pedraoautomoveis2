import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShowCar from '../pages/ShowCar/Index';
import React, { useContext } from 'react';
import Politic from '../pages/Politic';
import Seminovos from '../pages/Seminovos';
import { UserContext } from '../context/car.context';
import { About } from '../pages/About';

const Routes = ({cars}) => {
  // const { cars } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home data={cars}/>
        </Route>
        <Route exact path="/car/:id">
        <ShowCar cars={cars}/>
        </Route>   
        <Route exact path="/politic">
        <Politic/>
        </Route>  
        <Route exact path="/seminovos">
        <Seminovos cars={cars}/>
        </Route>    
        <Route exact path="/quemsomos">
          <About/>
        </Route>
        {/* <Route component={Page404} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
