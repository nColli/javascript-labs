export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return { ...state, employees: action.payload };
        case 'ADD_EMPLOYEE':
            return { ...state, employees: [...state.employees, action.payload] };
        case 'EDIT_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.map(emp =>
                    emp.id === action.payload.id ? action.payload : emp
                ),
            };
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(emp => emp.id !== action.payload),
            };
        default:
            return state;
    }
};