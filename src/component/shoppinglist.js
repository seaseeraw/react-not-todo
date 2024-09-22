import React, { useState } from 'react'
import AddList from './addlist'
import ListComponent from './listcomponent';


function ShoppingList() {
  const [taskList,settaskList]=useState([])
  const tempArray=[]
  const List=(taskInput)=>{
    const obj = {
      ...taskInput,
      
      id: randomIdGenerator(),
      type: "entry",
    };
  //  tempArray.push(taskInput)
    settaskList([...taskList,obj]);
  };
  console.log(taskList);
const randomIdGenerator = (lenght = 6) => {
  const str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

  let id = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }

  return id;
};


  return (
<>
<div className='wrapper'>
<div className="container text-center p-5">
<h1> NOT TO DO LIST</h1>
</div>
     <AddList List={List}/>
        
       <ListComponent/>
       </div>
</>

  )
}

export default ShoppingList;