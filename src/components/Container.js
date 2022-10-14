import React from "react";
import GroceryList from "./GroceryList";


class Container extends React.Component{
    constructor (props){
    super(props);
    this.state={
        groceryItems:[
            {id:1, title:"Eggs"},
            {id:2, title:"Cheese"},
            {id:3, title:"Garlic"},
        ]
    }//state
    }//constructor


    render(){
        return(
                <div className="container">
                <header>
                    <h1>Grocery List 13 october 2020 blablabla</h1>
                </header>
                <main>
                   <GroceryList
                        items={this.state.groceryItems}
                    />
                </main>
                </div>
                )//return
    }//render
}//component    
export default Container