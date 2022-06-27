import logo from './logo.svg';
import './App.css';
import login from './components/login';
import signup from './components/signup';
import React, {useEffect, useState} from 'react';
import Home from './components/home';
import { initializeApp } from 'firebase/app';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {collection, getDocks} from 'firebase/firestore' ;



function App() {
  const [transaction, setTransaction] = useState([]) ;

  useEffect(()=>{
    
  })

  useEffect(()=>{
    console.log(transaction)
  }, [transaction]
  )

  const  addTransaction = ((amount, name, transactionType)=>{


   setTransaction((item)=> [...item, {
     amount:amount,
     name:name ,
     transactionType:transactionType ,
   }])

    console.log(transactionType)
  })
  return (
    <Router>

      <Switch>
        <Route  exact path="/" component={login} ></Route>
        <Route path="/sign-up" component={signup}></Route>

        <Route path="/home">
        <Home list={transaction} add={addTransaction} />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
