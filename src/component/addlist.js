import React from 'react'
// import { Button } from 'react-bootstrap';
import '../App.css'
// const handleCom=()=>{
//     alert("presses added");
// }
// const noHandle=()=>{
//     alert("Result Negative");
// }
function AddList() {
  return (
    // <div className='add'>
    //    <form action="">

    //             <div className="row">
    //                 <div className="col">
    //                     <input type="text" class="form-control" placeholder="Task" name="task" id="task"
    //                         aria-label="First name"/>
    //                 </div>
    //                 <div className="col">
    //                     <input type="number" class="form-control" placeholder="Hour" aria-label="Last name" name="hour"
    //                         id="hour"/>
    //                 </div>
    //                 <div className="col">
                    
                        
    //                 </div>
    //             </div>
    //         </form>
        

    // </div>
    <div className="container bg-transparent border border-dark-subtle shadow rounded-pill class">
    <form action="javascript:void(0)" onsubmit="addTask(this)">
        <div class="row p-5 g-3">
            <div class="col-md-7">
                <input type="text" class="form-control" placeholder="Task" name="task" id="task"
                    aria-label="First name"/>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" placeholder="Hour" aria-label="Last name" name="hour"
                    id="hour"/>
            </div>
            <div class="col-md-3 d-grid">
                <button type="submit" class="btn btn-primary ">Add Task</button>
            </div>
        </div>
    </form>
</div>

  )
}

export default AddList;