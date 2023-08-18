import React from 'react'

function lister(props) {
  return (
    <ul>
        { props.items.map( item => <li>{item}</li> ) }
    </ul>
  )
}

export default lister