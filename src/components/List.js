 import React from "react"
 import ListItem from "./ListItem";

class List extends React.Component{
    
    render (){   
         
        return (
            <div>
                console.log("this is map from class list")
                
                <ul className="app-list">
                    
               
                {this.props.item.map((item1 =>(
                   // console.log(`eachItem item1:" ${item1}`) works? no
                    //console.log(item1) works? yes good job
                      <ListItem
                        key={item1.id} 
                        item={item1}
                       />
                       )))} 
                </ul>
            </div> 
        )
    }
}

export default List
//let op regel 12 t/m20

// {this.props.items.map((item =>(
//     <ListItem
//               key={item.id} 
//               item={item}
//               />
               
              
    
//     )))}
//op R(egel) 12 hoort te staan: <p>This is from class List.js </p>