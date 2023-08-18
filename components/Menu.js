
function Menu(props) {  
  return (
    <div className='w-1/4 h-screen p-2 bg-purple-300'>
        <span className="decoration-4">{props.icon} {props.caption}</span>
        <div className="bg-red-400 p-4 flex gap-2">{props.children}</div>
        <ul className="mt-2 px-5 text-blue-500 underline">

          {props.links.map( link => <li><a href = {link.url}>{link.name}</a></li> )}

        </ul>
    </div>
  )
}

export default Menu