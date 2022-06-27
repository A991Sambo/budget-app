import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
import { useState } from "react";


function signup (){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

    const btn={
        with: '100px',
        hight: '400px',
        marginTop: '3%',
    } 
    let histotry=useHistory();

    const Register =() =>{

        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            histotry.push("/home");
        }).catch((error)=>{
            console.log(error);
        })

       
    };
    return (
        <div className="container" >

            <h1>Register account here.</h1>

            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}
             />{" "}
             <br></br>
            <input type="pasasword" placeholder="Enter password"  onChange={(e)=>setPassword(e.target.value)} 
            />{" "}
            <br></br>
            <input type="cornfirm-passwrod" placeholder="cornfrim-password" />

            <button style={btn}onClick={Register}>signup</button>
            <Link to ='/'>go to login</Link>
        </div>
    )
}

export default signup;