import React from 'react';
import AddItem from './additem';
import DisplayTransaction from './DisplayTransaction';
import signup from './signup';



function Home (props){
   console.log(props);
    return(
        <div className="container">
            <DisplayTransaction list={props.list} />
            <AddItem  add={props.add}  />
        </div>
    )
}
export default Home;