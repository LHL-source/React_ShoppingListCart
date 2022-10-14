import React from "react";
import List from "./List";
function GroceryList({items}){
    return(
        <div className="Grocery-List">
            <h2>Shopping List</h2>
            <List 
                item={items}
            />
        </div>
    )
}

export default GroceryList;