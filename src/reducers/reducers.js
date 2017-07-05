export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return action.todo;
        }
        return todo;
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    case 'LOGOUT': // clears the todos once we logout
      return [];
    default:
      return state;
  }
};

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return {};
    case 'SIGNUP':
      return action.user;
    default:
      return state;
  }
};
