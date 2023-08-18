import { useEffect, useState } from 'react'
import Modal from './Modal'
import Settings from './Settings'

function Nav() {
	
	let [config, setConfig] = useState({pomo:25, sb:5, lb:15})

	useEffect(()=>{

		const con = localStorage?.getItem('config')
		
		if(con){
		 setConfig(JSON.parse(con))
		 console.log(con)
		 console.log(config)
		//  debugger
		}

	}, [])

	function onClose(){
		// alert(config.pomo)
		console.log(config)
		localStorage.setItem('config', JSON.stringify(config))
	}
  return (
    <div className="p-4 flex w-96s m-autos my-2">
		<h1 className="p-1 text-white">
			Pomofocus
		</h1>
		<div className="ml-auto flex gap-2" href="/">
			<Modal lable = "Report" title = "Report">
				<div className = "p-24 bg-green-300">
					
				</div>			
			</Modal>
				
			<Modal text_color="text-black" onClose = {onClose} size = "medium" classes = "bg-blue-200" lable = "Settings" title = "The settings dialog">
				<Settings data = {config} />
			</Modal>
			
			<Modal lable = "Login" title = "The settings dialog"> hellow Settings </Modal>
		</div>
	</div>
  )
}

export default Nav