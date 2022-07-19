import React, { component } from 'react';
import { CSSProperties } from 'react';


function BudgetBalance (props){
   console.log(props);
return (
    <div>
        <h4>Your Balance</h4>
        <h2> R {props.income - props.expense - props.expenses - props.icomes}</h2>

        <div className="blance" >
            <div>
                <h3>Icome</h3>

                <h3 style={{ color:"green" }}>{props.income}</h3>
            </div>
            <div className="line"></div>

            <div>
                <h3>Expenses</h3>
                <h3 style={{ color: "red" }}>{props.expenses}</h3>
            </div>

            <div>
                <h3>incomes</h3>
                <h3 style={{ color: "green" }}>{props.Income}</h3>
            </div>
            
   
            <div>
                <h3>income</h3>
                <h3 style={{ color: "green" }}>{props.income}</h3>
            </div>
            


        </div>
    </div>
) ;



}

export default BudgetBalance;