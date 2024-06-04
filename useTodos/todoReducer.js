export const todoReducer = (initialSate = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            
            return [...initialSate, action.payload]

        case '[TODO] Remove Todo':
            return initialSate.filter(todo => todo.id !== action.payload);
    

        case '[TODO] Toggle Todo':
            return initialSate.map(todo => {
                
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo;
            })
        default:
            return initialSate;
    }
}