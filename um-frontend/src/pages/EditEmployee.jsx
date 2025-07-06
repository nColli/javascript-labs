import { useState, useContext, useEffect  } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useParams, useNavigate, Link  } from 'react-router-dom';
import { LOCATIONS } from '../data/locations';

const EditEmployee = () => {
    const navigate = useNavigate();
    const { editEmployee, employees } = useContext(GlobalContext);
    const { id } = useParams();
    const [selectedUser, setSeletedUser] = useState({ id: null, name: '', designation: '', location: '' });

    useEffect(() => {
        const selectedUser = employees.find((employee) => String(employee.id) === String(id));
        setSeletedUser(selectedUser);
    }, [employees, id]);


    const onSubmit = (e) => {
        if (!selectedUser.name.length > 0) {
            alert("name is empty!")
            e.preventDefault();
            return
        }

        editEmployee(selectedUser);
        e.preventDefault();
        navigate('/');
    };

    const handleOnChange = (userKey, value) => setSeletedUser({
        ...selectedUser,
        [userKey]: value
    });

    if (!selectedUser || !selectedUser.id)  return <div>Employee not found</div>

    return (
        <form className="w-full max-w-sm container mt-20 mx-auto  " onSubmit={onSubmit}>
            <div className="w-full mb-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Name of employee
                </label>
                <input id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Enter name" />
            </div>

            {/* <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input id="location" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.location} onChange={(e) => handleOnChange('location', e.target.value)} type="text" placeholder="Enter location" />
      </div> */}

            <div className="w-full mb-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                    Location
                </label>
                <select id="location"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" placeholder="Enter location"
                        value={selectedUser.location}
                        onChange={(e) => handleOnChange('location', e.target.value)}
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
                <input id="designation" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.designation} onChange={(e) => handleOnChange('designation', e.target.value)} type="text" placeholder="Enter designation" />
            </div>
            <div className="flex items-center justify-between">
                <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                    Edit Employee
                </button>
            </div>
            <div className="text-center mt-4 text-gray-500">
                <Link to="/">
                    Cancel
                </Link>
            </div>
        </form>
    );
};

export default EditEmployee