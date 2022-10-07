import React from "react"

function ListItem (item){
     console.log(item);
     return (
        <div>
            <h1>key={item.id}</h1>
            <h1>naam={item.title}</h1>
        </div>
     )
}

export default ListItem