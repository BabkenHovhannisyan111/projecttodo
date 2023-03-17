import { useState } from "react"

function TodoForm({Add}){
    const [text,setText]=useState("")
return (
    <div>
        <form onSubmit={(e)=>{
        e.preventDefault()
        Add(text)
        setText("")
    }}>
    <input type="text" value={text} onChange={(e)=>{
       setText(e.target.value)
    }} />
    <button >Add</button>
    </form>
    </div>
)

}
export default TodoForm