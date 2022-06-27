import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth' ;
import { auth } from "../config/firebase";

function login (){
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState(""); 


    const btn={ 
        width: '100px',
        hight: '40px',
        marginTop:'3%',
}

let histotry=useHistory();

const login=(()=>{
    signInWithEmailAndPassword(auth, email, password).then(()=>{
        histotry.push("/home");

    }).catch((error)=>{
        console.log(error);

    })
})


    return (
        <div className="container" >
            <h1>login.</h1>

            <input type="email" placeholder="Enter your email" onChange = {(e)=>setEmail((e.target.value))}
             />
            <input type="password" placeholder="Enter password" onChange = {(e)=>setPassword((e.target.value))}
             />
    
            <button style={btn} onClick={login}>LOGIN.</button>
            <span>click on the link below to signup.</span>
            <Link to ="sign-up">click to signup</Link>
            <span></span>
            

        </div>
    )
}

export default login;