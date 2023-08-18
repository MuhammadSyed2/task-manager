
import{useEffect, useRef, useState} from 'react'
import Editor from '../components/Editor'
// let tasks=[{name:'Before the First name',status:'Donener', duration:21,remarks:'Good Job'}, 
// {name:'First name',status:'Done', duration:2,remarks:'Great Job'},
// {name:'secend task', status:'pending', duration:6,remarks:'Average'},
// {name:'Mr.',status:'processing',duration:10,remarks:'not good'},
// {name:'Mr. U',status:'completed',duration:9,remarks:'Excelent'},
// {name:'Mr. J',status:'executed',duration:16,remarks:'carry on'}]
// add a few more fields to tasks
function composition() {
  let [tasks, setTasks] = useState([])
  useEffect(()=>{
    fetch('./api/data?caller=me')
    .then(response=>response.json())
    .then(data=>{
      setTasks(data)
      // alert(person.name + ' - ' + person.age)
    })
  }, [])

    let nameRef = useRef()

    let [selectedTask, setSelectedTask] = useState({})
    let [taskname,setTaskName]=useState('the default task name')
    let [taskStatus, setTaskStatus] = useState('====')
    let [taskduration, SetTaskDuration] = useState('')
    let [taskremark,setTaskRemark] = useState ('')
    function selectedTaskExplioitly(task){
        //selectedTask = task
        setSelectedTask(task)
        setTaskName(task.name)
        setTaskStatus(task.status)
        SetTaskDuration(task.duration)
        setTaskRemark(task.remarks)
        nameRef.current.focus()
        nameRef.current.select()
        
        // alert(selectedTask.name)
    }
  return (
    <div className=''>
        <h1 className={'bg-green-200  text-2xl p-4 text-align:center'}>Task: {taskname} {taskStatus} {taskduration}{taskremark}{/* display the other fields of the selected task */}</h1>
        <Editor referer = {nameRef} caption = "Edit the selected task" task = {selectedTask}/>
        <ul>
            {tasks.map ( (task, index)=>
            <li key={index}
            style={{color : task == selectedTask ? 'red' : 'green'}} 
            onClick ={()=>selectedTaskExplioitly(task)}
            
            className={"hover:bg-green-100 text-red-" + task.duration + '00' + ( task.name == selectedTask.name ? ' text-red-600 bg-red-100':'')}>
              {task.name} - {task.status} = {task.duration} Remark: {task.remarks}
              {/* display the other fields of the task */}
              </li>
           ) }
        </ul>
    </div>
  )
}

export default composition