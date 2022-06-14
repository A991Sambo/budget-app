import React from 'react';
import AddItem from './additem';
import DisplayTransaction from './DisplayTransaction';



function Home (props){
    console.log(props);
    return(
        <div className="container">
            <DisplayTransaction list={this.props.list} />
            <AddItem  add={this.props.add}  />
        </div>
    )
}
export default Home;