import React,{useState} from "react"
import "../css/add.css"
function AddItem (props){

    const [amount, setAmount] = useState('')
    const [name, setName] = useState("");
    const [transactionType, setTransactionType] = useState("");


    const add =(()=>{
       console.log(amount + ' ' + name + ' ' +  transactionType);
        props.add(amount, name, transactionType) ;
    })

    return (
    <div>
        <h1 style={{paddingTop:"5px"}}>Add transaction</h1>

     <input placeholder="Enter name"
      onChange={(e)=> setName(e.target.value)}
      />{" "}
       <br></br>
     <input placeholder="Enter amount"
      onChange={(e)=> setAmount(e.target.value)}
      />{" "}
      <br></br>
     <select onChange={(e) => setTransactionType(e.target.value)}>
         <option value="" selected disabled>Transaction Type</option>
      <option value="Income">Icome</option>
      <option value="Expense">Expense</option>
     </select>{" "}
     <br></br>
     <button id="btn" onClick={add}>
         Add 
     </button>

     
    </div>
    );
}

export default AddItem;