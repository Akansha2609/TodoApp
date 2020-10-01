const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        console.log("ADD_TODO::");
        let nextAppState = [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
        console.log(JSON.stringify(nextAppState));
        return nextAppState;
  
      case 'DELETE_TODO':
        console.log("DELETE_TODO::");
        let nextState = [];
        console.log(JSON.stringify(nextState));
        return nextState; 
  
      case 'DELETE_TODO_ITEM':
        var newState=[];
        state.map(todo =>{
          if(todo.id != action.id){
            newState.push(todo);
          }
        });
        return newState;
  
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todos
  