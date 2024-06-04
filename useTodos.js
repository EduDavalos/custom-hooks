import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialSate = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la pidra del alma',
    //     done: false
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; 
}

export const useTodos = () => {
    
    //primero se llama al reducer, luego el estado inicial de las variables, y finalmente una funcion que se ejecuta previo a la inicializacion del initialState
    const [todos, dispatch] = useReducer(todoReducer, initialSate, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const todosCount = () => {
        return todos.length;
    }

    const pendingTodosCount = () => {
        return todos.filter(todo => !todo.done).length;
    }
  
    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
  }
}

