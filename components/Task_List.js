import React, { useEffect, useState } from 'react'
import { createDispatch, useDispatch, useSelector } from 'react-redux'
import Add_Edit from './Add_Edit'
import Button_Group from './Button_Group'
import Drop_Down from './Drop_Down'
import {setCurrentTask} from '../lib/Slice'

function Task_List() {
	let dbTasks = [{ID:1, Name:'The First Task'}, {ID:2, Name:'The Second Task'}]
	// retrieve / read tasks from the backend database table and set into dbTasks
	let [tasks, setTasks] = useState(dbTasks)
	// let [selectedTask, setSslectedTask] = useState()
	let [adding, setAdding] = useState(false)
	let [editing, setEditing] = useState(false)
	let optionsSB = [ 'None', 'Pending', 'Doing', 'Done', 'Paused']
	// select the currentTask from the slice
	let selectedTask = useSelector(state => state.data.currentTask)
	// set selcted task as the current task
	let dispatch = useDispatch()
	function setSelectedTask(task){
		console.log()
		dispatch(setCurrentTask(task))
	}
	
	useEffect(() => {
		fetch('./api/data').then(b => b.json())
		.then(data => {
			setTasks(data)
			// setn2(data.age)
		})},[]
	)

	function addTask(){
		setAdding(true)
	}
	function deleteTask(ctask){
		// debugger
		fetch('./api/data?a=delete&t=task&c='+ctask.ID).then(r=>r.json()).then(data=>{
			// setDeleting(true)
			setTasks(tasks.filter(task => task.ID != ctask.ID))
			setEditing()
		})
	}
	function save(values){
		// alert(values.name)
		// send the new task information to be saved into the tasks table of the database
		if(values){
			
			fetch('./api/data?a=save&t=task', {method:'post', header, body:JSON.stringify(values)}).then(r=>r.json()).then(data=>{
				setTasks([values, ...tasks])
				setAdding(false)
			})
		}
	}
	function editTask(task){
		// if(!task.loaded){
			fetch('./api/data?t=task&a=data&c='+task.ID).then(r=>r.json()).then(data=>{
				setEditing(task.ID)
				// task.loaded = true
			})


		// }
		// else{
		// 	setEditing(task.ID)
		// }
	}
	let header = {'Content-Type': 'application/json'}
	function update(values){
		// alert(values.name)
		// send the information of the edited tasks be be modified in the tasks table of the database
		if(values){
			setTasks(tasks.map(task => values.ID == task.ID ? values : task))
			fetch('./api/data?a=save&t=task', {method:'post', header, body:JSON.stringify(values)})
		}
		setEditing()
	}
	let [status, setStatus] = useState('Doing')
	function filterTasks(task){
		return status == 'None' || task.Status == status
	}
    return (
    <div className="w-96 m-auto">
	<div className="p-2 text-white w-96 m-auto text-center">
		<h1 className="opacity-50">#0</h1>
		{selectedTask?.Name}
	</div>
	<ul className="flex flex-col gap-3">
		<div className="text-xl text-white flex ">
		Task:<Drop_Down classes = "ml-auto" value = {status} options = {optionsSB} onChange = {setStatus}/>
			{/* <details>
				<summary>Task</summary>
				<Button_Group options = {optionsSB} value = {status} onChange = {setStatus} />
			</details> */}
		</div>
		{tasks?.filter(filterTasks).map((task, index) =>
		<li key = {index} onClick = {()=>setSelectedTask(task)} >
			{
				editing == task.ID
				? <Add_Edit values = {task} save = {update} delete = {deleteTask}/>
				: <div className={(task == selectedTask ? 'border-l-4 bg-red-300 ' : '' ) + "" + ' text-black bg-white rounded cursor-pointer p-4 flex bg-green-200'}><span>{index + 1}. {task.Name}</span> <span onClick = {()=>editTask(task)} className = "ml-auto">...</span></div>
			}
		</li>
		)}
		
	</ul>
	{adding ?
	<Add_Edit values = {{Name:'new task...'}} save = {save}/>
	:
	<button onClick = {addTask} className="p-4 px-12 my-3 w-full border-dashed bg-red-800 bg-opacity-40 text-white rounded-md">
		Add Tasks
	</button>
	}
</div>
  )
}

export default Task_List