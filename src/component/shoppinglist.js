import React from 'react'
import AddList from './addlist'
import ListComponent from './listcomponent';
// import HourAdd from './hour';

function ShoppingList() {
  return (
<>
<div className='wrapper'>
<div className="container text-center p-5">
<h1> NOT TO DO LIST</h1>
</div>
     <AddList/>
        
       <ListComponent/>
       </div>
</>
    // <div className="container text-center p-5">
    //         <h1> NOT TO DO LIST</h1>
    //         <AddList/>
        
    //     <ListComponent/>
    //     </div>
    // <div className='wrapper'>
        
    //     <AddList/>
        
    //     <ListComponent/>
    //     </div>
  )
}

export default ShoppingList;