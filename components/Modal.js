import { useRef } from "react"

function Modal({title, lable, children, size, classes, text_color, onClose}) {
    // export let title = 'the default title', lable = 'open', classes, size = 'large'
    let dialog = useRef()
    function close(){
      onClose && onClose()
        dialog.current.close()
    }
    function open(){
        dialog.current.showModal()
// 			isOpen = true
    }
  return (
    <>
      <button title = {title} className = {text_color + " text-white border-none rounded"} onClick = {open}>{lable}</button>
      <dialog ref = {dialog} className = { size + " p-0 rounded-xl shadow-lg " + classes }>
		    <div className = "p-3 border-b-2 flex bg-gray-200">{title} <span onClick = {close} className = "cursor-pointer ml-auto px-2">save</span></div>
	      <div className = "p-3 overflow-auto w-full">{children}</div>
      </dialog>
</>

  )
}

export default Modal