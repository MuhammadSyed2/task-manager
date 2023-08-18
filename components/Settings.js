import React, { useEffect, useState } from 'react'

function Settings({data}) {

	let [pomo, setPomo] = useState(data.pomo) 
	let [sb, setsb] = useState(data.sb) 
	let [lb, setlb] = useState(data.lb) 
	
	useEffect(()=>{
		data.pomo = pomo
		data.sb = sb
		data.lb = lb
	}, [pomo, sb, lb])
	
	function save (){
	}
  return (
    <>
        Timessss (Minutes) {data.sb}
		<div className="w-full flex gap-3">
			<span className="flex flex-col gap-1">pomodoro <input value={pomo} onChange={(e) => { setPomo(e.target.value);}}/></span>
			<span className="flex flex-col gap-1">short break <input value={sb} onChange={(e) => { setsb(e.target.value); }}/></span>
			<span className="flex flex-col gap-1 ">long break <input value={lb} onChange={(e) => { setlb(e.target.value); }}/></span>
		</div>
		Alarm 
		{/* <div className="w-full flex gap-3">
			<span className="flex flex-col gap-1">pomodoro <input value={data.pomo}/></span>
			<span className="flex flex-col gap-1">short break <input value={data.sb}/></span>
			<span className="flex flex-col gap-1">long break <input value={data.lb}/></span>
		</div> */}

    </>
  )
}

export default Settings