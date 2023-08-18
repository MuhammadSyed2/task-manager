import React, { useState } from 'react'

function Button_Group({label, options, value, onChange}) {
  let [currentOption, setOption] = useState(value)
  return (
    <div className='flex flex-wrap gap-1 border p-1'>
        {label ? `${label}: ` : 'Options: '}
        {/* {label && `${label}:` } */}
        {/* {currentOption} */}
        {options.map(option => <button key={option} className={'px-2 rounded ' + (currentOption == option ? 'bg-green-400 shadow-lg' : '')} onClick={()=>{onChange && onChange(option); setOption(option)}}>{option}</button>)}
    </div>
  )
}

export default Button_Group