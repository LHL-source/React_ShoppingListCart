import React from "react"

function ListItem (item){
     console.log(item);
     console.log(" this is item.name:",item.name);
     console.log(" this is item.name.id:",item.name.id);
     console.log(" this is item.name.title:",item.name.title);

     return (
        <div>
            <li 
              key={item.name.id}
              className="list-item"
          
              value={item.name.title}
              >

        
              {item.name.title}
            </li>
        </div>
     )
}

export default ListItem