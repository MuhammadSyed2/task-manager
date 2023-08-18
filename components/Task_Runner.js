import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountDown from './CountDown'


function Task_Runner({callback}) {
    
	let times = {task:'25:00', sbreak:'05:00', lbreak:'15:00'}
	// let ptime = '25:00', ctime = times.task
    let [flag, setFlag] = useState(false)
	let selectedTask = useSelector(state => state.data.currentTask)
	let [ctime, setCTIme] = useState(selectedTask.Duration + ':00')

	// alert(ctime)

	let initTime = 0
	
	function changeState(flag){
		initTime = selectedTask.Duration - selectedTask.Time_Ellapsed
		setFlag(flag)
		if(flag == false){
			callback && callback()
		}
	}
    return (
    
    
<div className="p-3 my-2 flex flex-col bg-red-300 w-96 m-auto justify-center text-center rounded-md">
	
	<div className="flex gap-3 justify-center">
		{/* {ctime} */}
		<button onClick = {()=> setCTIme(times.task) } className={(ctime == times.task ? 'cursor-pointer bg-red-500' : '') + " text-white border-none rounded px-2"}>
			Pomodoro
		</button>
		<button onClick = {()=>ctime = times.sbreak} className={(ctime == times.sbreak ? 'cursor-pointer bg-red-500' : '') + "text-white border-none rounded px-2"}>
			Short Break
		</button>
		<button onClick = {()=>ctime = times.lbreak} className={(ctime == times.lbreak ? 'cursor-pointer bg-red-500' : '') + "text-white border-none rounded px-2"}>
			Long Break
		</button>
	</div>
	
	<span className = "text-8xl text-white"><CountDown time = {ctime} flag = {flag}/></span>
	<button className="bg-white text-red-400 p-3 m-2 mx-28 rounded-md" onClick = {()=>changeState(!flag)}>
		{flag ? 'Pause' : 'Start'}
	</button>
	
</div>

  )
}

export default Task_Runner