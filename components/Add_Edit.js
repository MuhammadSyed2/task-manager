import React, { useState } from 'react'
import Button_Group from './Button_Group'
import Task_List from './Task_List'

function Add_Edit({save, values, delete : deleteTask}) {
  let [name, setName] = useState(values.Name)
  let [duration, setDuration] = useState(values.Duration)
  let [details, setDetails] = useState(values.Details)
  let [status, setStatus] = useState(values.Status)
  let options = [ 'None', 'Pending', 'Doing', 'Done', 'Paused']

  function updateValue(){
    values.Name = name
    values.Duration = duration
    values.Details = details
    values.Status = status
    // save({...values, Name:name, Duration:duration, Details:details, Status:status})
    // console.log(values)
    save(values)
  }

  function deleteInternal(){
    deleteTask(values)
  }

  return (
    <div className=" flex flex-col bg-white rounded w-96 m-auto mt-2">
        <input className="w-5/6 p-3 m-3 mx-7" onChange = {(e)=>setName(e.target.value)} value = {name} placeholder="What are you working on?"/>
            <span className='p-2'>Task Duration: <input className='p-2' onChange={(e) => setDuration(e.target.value)} value = {duration}/></span>
            <span className='p-2'>Details: <input value ={details} onChange = {(e)=>setDetails(e.target.value)} className='p-2'/></span>
            {/* <span className='p-2'>Status: <input value = {status} onChange = {(e)=>setStatus(e.target.value)}className='p-2'/></span> */}
            <Button_Group label = "Status" options = {options} value = {status} onChange = {setStatus}/>
        <div className="p-3 flex gap-3">
            <button onClick = {()=>save()} className="bg-gray-300 py-2 px-4 cursor-pointer">Cancel</button>
            <button onClick = {deleteInternal} className='bg-red-600 text-white py-2 px-4 cursor-pointer ml-auto'>Delete</button>
            <button onClick = {updateValue} className="bg-green-700 text-white py-2 px-4 cursor-pointer ml-auto">Save</button>
            
        </div>
    </div>
  )
}

export default Add_Edit