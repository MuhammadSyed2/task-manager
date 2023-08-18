import { useState } from "react"
import Menu from '../../components/Menu'
function index() {
  let [person, updatePerson] = useState({})
  fetch('./api/data?caller=me')
    .then(response=>response.json())
    .then(data=>{
      updatePerson(data)
      alert(person.name + ' - ' + person.age)
    })
  return (
    <div>
      <Menu links = {[]}/>
      this is the default page for clients - [ {person.name} - {person.age} ]</div>
  )
}

export default index