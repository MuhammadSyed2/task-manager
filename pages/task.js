import Add_Edit from "../components/Add_Edit"
import Nav from "../components/Nav"
import Pomos from "../components/Pomos"
import Task_List from "../components/Task_List"
import Task_Runner from "../components/Task_Runner"


function task() {
  return (
    <div className='bg-red-400 px-36 h-full'>
        <Nav/>
        <Task_Runner />
        <Task_List />
        {/* <Add_Edit/> */}
        <Pomos />
    </div>
  )
}

export default task