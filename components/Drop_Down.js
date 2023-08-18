import React from 'react'

function Drop_Down({options, value, onChange, classes}) {
  return (
    <select className={'text-black ' + classes} value = {value} onChange={(e)=>onChange(e.target.value)}>
        {options.map(option=><option key={option} value = {option}>{option}</option>)}    
    </select>
  )
}

export default Drop_Down