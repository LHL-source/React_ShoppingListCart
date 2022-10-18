import React from "react"
import GroceryList from "./GroceryList.js"
import ShoppingCard from "./ShoppingCard.js"

class Container extends React.Component{
    constructor (props){
    super(props);
    this.state={
        groceryItems:[
            {id:1, title:"Eggs"},
            {id:2, title:"Cheese"},
            {id:3, title:"Garlic"},
        ],

        shoppingListItems: [
            {id:1, title:"Onions", amount: 1},
            {id:2, title:"Tomato", amoount:1},

        ]
    }//state
    }//constructor

    render(){
        return(
                <div className="container">
                <header>
                     <h1>This is from class container:Grocery List 13 october 2020 blablabla</h1>
                </header>

                <main>
                    <p>This is from container:This is main of container</p>
                    

                    <GroceryList
                        items={this.state.groceryItems}
                          />

                    <ShoppingCard
                        items={this.state.shoppingListItems}
                        />

                </main>
                </div>
                )//return
    }//render
}//component    
export default Container

