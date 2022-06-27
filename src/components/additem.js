import React, { useState } from "react";
import "../css/add.css";
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

function AddItem(props) {
    //added today
    console.log();
    const [amount, setAmount] = useState('')
    localStorage.setItem(amount, 'amount');

    const [name, setName] = useState("");
    localStorage.setItem(name, 'name');

    const [transactionType, setTransactionType] = useState("");
    localStorage.setItem(transactionType, 'transactionType');

    //added item here
    const add = (( ) => {

        console.log(amount + ' ' + name + ' ' + transactionType);
        props.add(amount, name, transactionType);
    })

    return (
        <div>
            <h1 style={{ paddingTop: "5px" }}>ADD TRANSACTION.</h1>
            <input placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />{" "}
            <br></br>

            <input placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
            />{" "}
            <br></br>

            <select onChange={(e)=> setTransactionType(e.target.value)}>
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