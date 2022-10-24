import React from "react"

function ListItem ({item, clickItem}){

   console.log(" this is from function ListItem item:",item);
   //  console.log(" this is from function ListItem item.item:nog even niets",item.item);
   
     return (
        <div>
            <div>this is from function ListItem</div> 
                <li
                key={item.id}
                className="list-item"
                onClick={clickItem}
                //value={item2.title}
                >
                   <div>{item.id} {item.title}</div>
         
                </li>  

        
            
           </div> 
        
     )
}

export default ListItem

// let op regel 10 t/m 15 :
//<li
// key={item.id}
// className="list-item"
// value={item.title}>
//</li>
//letop regel 15 tussen <div>:
//<div>{item.title}</div>
