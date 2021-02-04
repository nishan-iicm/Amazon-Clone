import React, { useEffect } from 'react';
import './App.css';
import Home from "./Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header"
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe("pk_test_51HzK7dAQscEvldAKCOsExx9Bz0vygtobvjrAw8grDAQ6PMg5345H0sWtWucxJEamTyEgLc6zBz9gdw9Dg8oPeKBI00wjudxQ4T");

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    }
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            
            </Elements>
            
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;