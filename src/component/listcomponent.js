import React from 'react'
import '../App.css';



function ListComponent() {
  return (

    <> <div className="container mt-4">
    <div class="row">
        <div class="col-md-6 text-center ">
            <h3>GOOD LIST</h3>
            <hr />
            <table class="table table-hover">
                <tbody id="goodList">

                </tbody>
            </table>
        </div>
        <div class="col-md-6 text-center ">
            <h3>BAD LIST</h3>
            <hr />
            <table class="table table-hover">
                <tbody id="badList">
                </tbody>
            </table>
            <div class="alert alert-danger" role="alert">
                You could have saved = <span id="badHour"> 0 </span> hrs
            </div>
        </div>
    </div>
</div>

<div className="container mt-4">
            <div class="row">
                <div class="col">
                    <div className="alert alert-success" role="alert">
                        The total hours allocated = <span id="totalHour">0</span> hrs
                    </div>
                </div>
            </div>
            </div>

</>
   
 
//     <div className="center ">
//     <h3>GOOD LIST</h3>
//     <hr />
//     <table className="table ">
//         <tbody id="goodList">

//         </tbody>
//     </table>
//     <h3>Badlist</h3>
//     <hr/>
//     <table className="table ">
//         <tbody id="badList">

//         </tbody>
//     </table>
// </div>


  )
}

export default ListComponent;