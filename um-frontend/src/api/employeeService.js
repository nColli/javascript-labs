"use client";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/employees';

export const getEmployees = () => axios.get(API_BASE_URL);

export const addEmployee = (employee) => axios.post(API_BASE_URL, employee);

export const updateEmployee = (employee) =>
    axios.put(`${API_BASE_URL}/${employee.id}`, employee);

export const deleteEmployee = (id) =>
    axios.delete(`${API_BASE_URL}/${id}`);
