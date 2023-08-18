// import Head from 'next/head'
// import Image from 'next/image'
// import composition from '../components/composition'
import {useEffect, useRef, useState} from 'react'

function new1() {
    
    useEffect(()=>{
    fetch('./api/hello').then(b => b.json())
    .then(data => {
        setn1(data.name)
        // setn2(data.age)
    })
},[])

  let Var1=useRef()
  let var2=useRef()

  let [n1, setn1]=useState(100)
  let [n2, setn2]=useState(1000)

  function changeN1(){
    Var1.current.focus()
    setn1(n1+1)
  }
  
  function changeN2(){
    var2.current.focus()
    // setn2(n2+2)
    n2=n2+2
    alert(n2)
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
     <input className='m-3' value={n1} ref={Var1}></input>
        <button className='p-3 bg-green-200' onClick={(a) => changeN1()}>A</button>
     <input className='m-3' value={n2} ref={var2}></input>
        <button className='p-3 bg-green-200' onClick={(b) => changeN2()}>B</button>
    
    </div>
  )
}

export default new1