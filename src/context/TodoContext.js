import { createContext , useContext} from "react";

export const TodoContext = createContext({
    Todo: [
        {
            id: 1,
            todo: "Learn React",
            Completed: false
        },
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id)=>{},
})
export const useTodo = () => {
   return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

