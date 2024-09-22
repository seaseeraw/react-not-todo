import React from 'react'

export default function TaskList() {
  return (
    <div>

{
    taskList.map((item, index)=> {
     return(
        `
        <tr>
            <th scope="row">${goodIndex}</th>
            <td>${item.task}</td>
            <td>${item.hour}hrs</td>
            <td class="text-end">
                <button type="button" class="btn btn-danger" onclick="deleteTask('${item.id}')"><i
                        class="fa-solid fa-trash"></i></button>

                <button type="button" class="btn btn-success" onclick="switchTask('${item.id}')"><i
                        class="fa-solid fa-arrow-right"></i></button>
            </td>
        </tr>
        
        `;
     )    
       
     }
 );
}
 
    </div>
   
  )
}
