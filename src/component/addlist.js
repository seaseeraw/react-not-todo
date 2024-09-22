import React from 'react'
import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import '../App.css'

function AddList({List}) {

   const  [task, settask]=useState({});
    const handleOnChange=(event)=>{
       const {name,value} = event.target
        settask({
            ...task,
            [name]:value,
        });
    };
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        List(task)
    }
  return (

    <div className="container bg-transparent border border-dark-subtle shadow rounded-pill class">
    <form action="" onSubmit={handleSubmit} >
        <div class="row p-5 g-3">
            <div class="col-md-7">
                <input type="text" class="form-control" placeholder="Task" name="task" id="task"
                    aria-label="First name" onChange={handleOnChange} />
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" placeholder="Hour" aria-label="Last name" name="hour"
                    id="hour" onChange={handleOnChange}/>
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