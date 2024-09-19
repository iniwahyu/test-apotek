// src/pages/EditEmployee.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`/api/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error("There was an error fetching the employee!", error);
    }
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employees/${id}`, employee);
      navigate('/employees');
    } catch (error) {
      console.error("There was an error updating the employee!", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
