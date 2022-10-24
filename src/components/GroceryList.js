import React from "react";
import List from "./List.js";
import InputField from "./InputField.js";

function GroceryList({items, onItemClick, onItemAdd}){
   
    return(
        <div className="grocery-List">
            <h2>This is from function GroceryList.js Shopping List</h2>
            <InputField onSubmit = {onItemAdd}/>
            <List  item={items} onItemClick = {onItemClick}/>
        </div>
    )
}

export default GroceryList;
