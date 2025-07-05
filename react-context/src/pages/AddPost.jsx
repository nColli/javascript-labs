import { useState, useContext  } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link, useNavigate } from 'react-router';

const AddPost = () => {
    const navigate = useNavigate();
    const { addPost } = useContext(GlobalContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = (e) => {
        if (!title.length > 0) {
            alert("title is empty!");
            return;
        }

        addPost({
            title,
            body
        });

        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="grid justify-center p-10">
            <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Add a new post</h1>
            <form className="w-full max-w-sm container mt-20 mx-auto" onSubmit={onSubmit}>
                <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">Title</label>
                    <input id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title"/>
                </div>
                <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4" htmlFor="body">Body</label>
                    <input id="body" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="Enter body"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add post
                    </button>
                </div>
                <div className="text-center mt-4 text-gray-500">
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        </div>
    );
};

export default AddPost;