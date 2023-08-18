import {useDispatch, useSelector} from 'react-redux'
import {addMember, addTask, editTask, setColor} from '../../lib/Slice'

function another() {
  let tasks = useSelector(state => state.data.tasks)
  let members = useSelector(state => state.data.members)
  let color = useSelector(state => state.data.color)
  let dispatch = useDispatch()
  
  function changeColor(){
    dispatch(setColor("green"))
  }
  
  function addNewTask(){
    let newTask = {Name:'task'}
    dispatch(addTask(newTask))
    alert(newTask.Name)
  }
  function removeTask(task){
    //alert(task.Name)

  }
  function editTheTask(task){
    dispatch(editTask({task, name:'new name'}))
  }

  function addNewMember(){
    let newMember = {Name:'omuk uddin', Number:1234567}
    dispatch(addMember(newMember))
    //members = [...members, ({Name:'omuk uddin', Number:1234567})]
    //alert(members.length)
  }
  function removeMember(){
    alert(3) 
  }

  return (
    <div>another page here
      <button onClick={changeColor}>Change color</button>
        <a href = "./" className = {'bg-'+color+'-400'}> Client Home {color}</a>
        <ul>
          <button className='bg-red-200' onClick = {addNewTask}>Add Task</button>
          
          {tasks.map(task => <li key = {task.ID}>{task.Name} <button className='bg-green-200' onClick={()=>removeTask(task)}>x</button> <button className='bg-green-200' onClick={()=>editTheTask(task)}> [ / ]</button></li>)}
          </ul>
          <ul>
            <button className='bg-blue-400 p-3' onClick={addNewMember}>Add Member</button>
          {members.map(member => <li key = {member.ID}>{member.Name}, {member.Number}.  <button className='bg-green-200' onClick={removeMember}>Remove?</button></li>)}
        </ul>
    </div>
  )
}

export default another