function TodoFooter({todos,onClearCompleted}){
return(
    <div>
    <span>{todos.filter((todo)=>todo.isCompleted).length}/{todos.length} Completed</span>
    <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
)

}
export default TodoFooter