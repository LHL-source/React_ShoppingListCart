import React from "react"

function ListItem ({item2}){

   //console.log(" this is from function ListItem item.id:tsog even nies",item.id);
   //  console.log(" this is from function ListItem item.item:nog even niets",item.item);
   
     return (
        <div>
                <li>
                key={item2.id}
                className="list-item"
                value={item2.title}
                </li>  

        
             <div>this is from function ListItem</div> 
           </div> 
        
     )
}

export default ListItem

// let op regel 10 t/m 15 :
//<li>
// key={item.id}
// className="list-item"
// value={item.title}
//</li>
//letop regel 15 tussen <div>:
//{item.title}
