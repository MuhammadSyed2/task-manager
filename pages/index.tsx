import Menu from '../components/Menu'
import Lister from '../components/Lister'
import Icon from '../components/Icon'

let tasks = ['first task', 'second task', 'task no. three']
let links = [{name:'Home', url:'./home'}, {name:'Members', url:'./member'}, {name:'Tasks', url:'./task'}]

const Home = () => {

  function showMessage(msg = 'something'){
    alert(msg)
  }

  return (
    <>
      <div className='flex flex-cols'>
        <Menu links = {links} icon = {<Icon/>} caption = "The Caption goes here">
          <button onClick = {()=>showMessage()}>Click me</button>
          <button onClick = {()=>showMessage('show another thing')}>Don't Click me</button>
        </Menu>
        <div className="flex min-h-screen flex-col items-center justify-center py-2 w-3/4">
          <Lister items = {tasks}/>
        </div>
      </div>
    </>
  )
}

export default Home
