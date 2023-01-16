import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShowCar from '../pages/ShowCar/Index';
import React, { useContext } from 'react';
import Politic from '../pages/Politic';
import Seminovos from '../pages/Seminovos';
import { UserContext } from '../context/car.context';
import { About } from '../pages/About';


const Routes = () => {
  const { cars } = useContext(UserContext);
  const data = cars;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home data={data}/>
        </Route>
        <Route exact path="/car/:id">
        <ShowCar cars={data}/>
        </Route>   
        <Route exact path="/politic">
        <Politic/>
        </Route>  
        <Route exact path="/seminovos">
        <Seminovos/>
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
