import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

function CountDown({timeeee, flag = true}) {
  
    // let time, flag = true
    let time = useSelector(state=>state.data.time)

    let [minutes, setMinutes] = useState(time.split(':')[0] - 0)
    let [seconds, setSeconds] = useState(time.split(':')[1] - 0)
    
    
    useEffect(function(){

        // setMinutes(time.split(':')[0] - 0)
        // setSeconds(time.split(':')[1] - 0)
        var interval = setInterval(function() {
            if(flag){
                setMinutes(seconds > 0 ? minutes : minutes - 1)
                setSeconds(seconds == 0 ? 59 : seconds - 1)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [])
    
    return (
    <div className = {(flag ? 'text-blue-500' : '') + " text-8xl"}>{minutes}:{seconds}</div>
  )
}

export default CountDown