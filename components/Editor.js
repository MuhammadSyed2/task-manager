import React, { useEffect, useState } from 'react'

function Editor(props) {
  let {task, caption, referer} = {...props}
  let [name, setName] = useState('')
    let [status, setStatus] = useState(task.status)
    let [duration, SetDuration] = useState (task.duration)
    let [remarks, setRemarks] = useState (task.remarks)
    useEffect(()=>{
      if(props.task.name)
      setName(task.name)
      setStatus(task.status)
      SetDuration(task.duration)
      setRemarks(task.remarks)
      // alert(name)
    }, [ task ])

    function update(){

    }
  return (
    <>
    {name}
    <div className='p-4 bg-blue-200 flex gap-2'>

        <input className='px-2' ref = {referer} value = {name} onChange = {(e)=>setName(e.target.value)}/>
        <input className='px-2' value={status} onChange = {(e)=>setStatus(e.target.value)}/>
        <input className='px-2' value={duration} onChange = {(e)=>SetDuration(e.target.value)}/>
        <input className='px-2'  value={remarks} onChange = {(e)=>setRemarks(e.target.value)}/>
        
        <button className='bg-blue-400 p-2 rounded-lg px-4' onClick={update}>Update</button>
    </div>
    </>
    )
}

export default Editor