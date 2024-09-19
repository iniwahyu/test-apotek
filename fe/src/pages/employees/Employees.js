// src/pages/Employee.js (or EmployeeList.js if you rename)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error("There was an error fetching the employees!", error);
    }
  };

  const deleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`/api/employees/${id}`);
        fetchEmployees();
      } catch (error) {
        console.error("There was an error deleting the employee!", error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <Link to="/employees/add" className="bg-blue-500 text-white p-2 rounded">Add New Employee</Link>
      <button
  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae orci bibendum, mollis dui tempor, dictum diam. Vestibulum mollis vehicula scelerisque. Vestibulum vel felis id sapien dapibus sollicitudin nec sit amet tellus. Sed a mi quis ex egestas luctus. Nullam volutpat ligula vel laoreet volutpat. Morbi hendrerit tempus nunc vulputate tempor. In suscipit ornare venenatis. Aenean vel dictum nibh. Aliquam blandit at risus a efficitur. Phasellus eget mi sed purus lobortis lobortis vel vitae justo.</p>
      <table className="min-w-full mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <Link to={`/employees/edit/${employee.id}`} className="bg-yellow-500 text-white p-1 rounded">Edit</Link>
                <button onClick={() => deleteEmployee(employee.id)} className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
