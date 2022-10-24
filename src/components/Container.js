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

    addItemToGroceryList=(title)=>{
        console.log("this is addItemGroceryList");
        this.setState({
                groceryItems:[
                    ...this.state.groceryItems,
                    {id:
                        this.state.groceryItems.length+
                        this.state.shoppingListItems.length+
                        1,
                        title:title,
                        amount:1,
                    }//id

                ]//groceryItems
        })//this.setState
    }//title

    
addGroceryItemToCart=(item)=>{
    console.log(`addGroceryItemToCart:${item.title}`);
}


    render(){
        return(
                <div className="container">
                <header>
                     <h1>This is from class container:Grocery List 13 october 2020 </h1>
                </header>

                <main>
                    

                    <GroceryList
                        items={this.state.groceryItems}
                        onItemclick={this.state.addGroceryItemToCart}
                        onItemAdd={this.addItemToGroceryList}
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

