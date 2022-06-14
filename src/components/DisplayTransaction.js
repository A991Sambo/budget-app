import React from "react";
import "../css/add.css"
function DisplayTransaction(props) {
    console.log(props.list)
    return (
       
        <div>
            {props.list.map((item) => (
                <div>

                    {
                        item.transactionType === "Income" ? (
                            <>
                                    <h2>Icome</h2>
                                      
                               <div className="transaction-list">
                                    <div><h4>R{item.amount}.00</h4></div>
                                    <div><h4>{item.name}</h4></div>
                                    <div><h4>{item.transaction}</h4></div>
                                 </div> 

                            </>
                        ) : (
                            <>

                                     <h2>Expense</h2>

                                <div className="Expense-list">
                                    <div><h4>-R{item.amount}.00</h4></div>
                                    <div><h4>{item.name}</h4></div>
                                    <div><h4>{item.transaction}</h4></div>
                                </div> 



                            </>
                        )
                    }
        

                
                        
            
            
                    
                </div>
            ))
            }
        </div >
    )
}

export default DisplayTransaction;

   