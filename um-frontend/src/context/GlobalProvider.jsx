"use client";

import { useReducer, useEffect} from 'react';
import toast from 'react-hot-toast';
import { AppReducer} from "./AppReducer"
import * as employeeService from '../api/employeeService';
import { GlobalContext } from './GlobalContext';

const initialState = {
    employees: [],
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // GET
    const fetchEmployees = async () => {
        try {
            const response = await employeeService.getEmployees();
            console.log("GET response.data", response.data);
            dispatch({ type: 'SET_EMPLOYEES', payload: response.data });
        } catch (error) {
            console.error('No response from server. Check your connection:', error);
            toast.error('No response from server. Check your connection.');
        }
    };

    // POST
    const addEmployee = async (employee) => {
        try {
            const response = await employeeService.addEmployee(employee);
            console.log("POST response.data", response.data);
            dispatch({ type: 'ADD_EMPLOYEE', payload: response.data });
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    // PUT
    const editEmployee = async (employee) => {
        if (!employee || !employee.id) {
            return;
        }
        try {
            const response = await employeeService.updateEmployee(employee);
            console.log("PUT response.data", response.data);
            dispatch({ type: 'EDIT_EMPLOYEE', payload: response.data });
        } catch (error) {
            console.error('Error editing employee:', error);
        }
    };

    // DELETE
    const removeEmployee = async (id) => {
        try {
            await employeeService.deleteEmployee(id);
            dispatch({ type: 'REMOVE_EMPLOYEE', payload: id });
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);


    return (
        <GlobalContext.Provider value={{
            employees: state.employees,
            addEmployee,
            editEmployee,
            removeEmployee
        }}>
            {children}
        </GlobalContext.Provider>
    );
};