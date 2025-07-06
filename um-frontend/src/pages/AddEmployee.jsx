import { useState, useContext  } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import { LOCATIONS } from '../data/locations';
import { v4 as uuidv4 } from 'uuid';

const AddEmployee = () => {
    const navigate = useNavigate();
    const { addEmployee } = useContext(GlobalContext);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [designation, setDesignation] = useState('');

    const onSubmit = (e) => {
        if (!name.length > 0) {
            alert("name is empty!")
            return;
        }

        addEmployee({
            id: uuidv4(),
            name,
            location,
            designation
        });

        e.preventDefault();
        navigate('/');
    };

    return (
        <form className="w-full max-w-sm container mt-20 mx-auto  " onSubmit={onSubmit}>
            <div className="w-full mb-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Name of employee
                </label>
                <input id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
            </div>

            <div className="w-full mb-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                    Location
                </label>
                <select id="location"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" placeholder="Enter location"
                        value={ location}
                        onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">Select a location</option>
                    {LOCATIONS.map((loc, index) => (
                        <option key={index} value={loc}>{loc}</option>
                    ))}
                </select>
            </div>

            <div className="w-full mb-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                    Designation
                </label>
                <input id="designation" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Enter designation" />
            </div>
            <div className="flex items-center justify-between">
                <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Employee
                </button>
            </div>
            <div className="text-center mt-4 text-gray-500">
                <Link to="/">Cancel</Link>
            </div>
        </form>
    );
};

export default AddEmployee