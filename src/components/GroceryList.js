import React from "react";
import List from "./List.js";

function GroceryList({items}){
   // console.log(" this is from func: grocerylist console.log itemS:" , items)//works ? almost items is undefined
    return(
        <div className="grocery-List">
            <h2>This is from function GroceryList.js Shopping List</h2>
           
            <List  item={items}/>
        </div>
    )
}

export default GroceryList;
//let op regel 8 t/m 10 <List 
 //               item={items}
  //              />
  //regel 10: