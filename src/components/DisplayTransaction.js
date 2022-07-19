import React from "react";
import "../css/add.css"
function DisplayTransaction(props) {
    console.log(props.list)
    return (
       
        <div className="hello">
            <h1>Transaction History</h1>
            {props.list.map((item) => (
                <div>

                    {
                        item.transactionType === "Income" ? (
                            <>
                                    
                                      
                               <div className="transaction-list">
                                    <div><h4>R{item.amount}.00</h4></div>
                                    <div><h4>{item.name}</h4></div>
                                    <div><h4>{item.transaction}</h4></div>
                                 </div> 

                            </>
                        ) : (
                            <>

                                     

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

   