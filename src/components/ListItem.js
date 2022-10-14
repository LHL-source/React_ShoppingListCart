import React from "react"

function ListItem ({item}){
     console.log(item);
     console.log(" this is item.name:",item.id);
     console.log(" this is item.name.id:",item.item);
   
     return (
        <div>
            <li 
              key={item.id}
              className="list-item"
              value={item.title}
              >

        
              {item.name.title}
            </li>
        </div>
     )
}

export default ListItem