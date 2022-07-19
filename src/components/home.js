import React, {useState, useEffect } from 'react';
import AddItem from './additem';
import DisplayTransaction from './DisplayTransaction';
import signup from './signup';
import  BudgetBalance  from './Balance';
import { assert } from '@firebase/util';



function Home (props){

    const [expenses , setExpense] =useState(0) ;

    const [incomes , setIcome] = useState(0) ;

    useEffect(()=>{
        let expense = 0 ;
        let income = 0;
        console.log(props);
        console.log(props.list);
        for (let index = 0; index < props.list.length; index++) {
            console.log(props.list[index])
            if(props.list[index].transactionType == "Expense" ){
                expense = expense + props.list[index].amount;
                console.log(expense);
            } else { 

               income = income + props.list[index].amount;


            }

        }
        setIcome(income); 
        setExpense(expense);
    }, [props.list.length]);
   

        useEffect(()=>{
           console.log(expenses)
                

        },[expenses])  
        
        useEffect(()=>{
            console.log(incomes)


        },[incomes])


    console.log(props);
    return(
        <div className="container">
             
            <BudgetBalance expenses = {expenses}  Income = {incomes}/>
            <DisplayTransaction list={props.list} />
            <AddItem  add={props.add}  />
        </div>
    )
}
export default Home;