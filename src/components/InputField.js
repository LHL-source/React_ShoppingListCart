import React, {useState}  from 'react';

function InputField({onSubmit}){
 const [inputValue, setInputValue]=useState(" ");


 function onButtonPress (){
    if(inputValue.length > 0){
        console.log(`submitting inputValue:${inputValue}`);
       // console.log(`submitting setInputValue: ${setInputValue}`);
        onSubmit (inputValue);
        setInputValue('');


    }//if
 }//function onbuttonpress
 return(
    
    <div className = "input-field">
        <input
            type = "text"
            value={inputValue}
            
           onChange ={(e)=>setInputValue(e.target.value)
           
        }
          
            
        />
    
            <button onClick={onButtonPress} placeholder="Add a grocery item">
            Add
            </button>
            
   
    </div>

   
 )
}//Inputfield
export default InputField;
//regel 1:{useState}
//regel 15:  //  console.log("e.target.value",e.target.value)
//regel 4:, setInputValue