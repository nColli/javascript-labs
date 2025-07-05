import { useContext } from 'react';
import  { GlobalContext}  from '../context/GlobalContext';
import {Link} from "react-router";

const PostsList = () => {
    const { posts } = useContext(GlobalContext);
    const postsList = posts || [];
    if (postsList.length === 0) {
        return null;
    }

    return (
        <div className="grid justify-center mt-10">
            <div className="col-span-1">
                <Link to="/add"></Link>
            </div>
            {postsList.map((post) => (
                <div className="flex items-center bg-gray-200 mb-2 shadow w-200"  key={post.id}>
                    <div className="flex-auto text-left px-4 py-2 m-2">
                        <p className="text-gray-900 leading-none">{post.title}</p>
                        <p className="text-gray-600">{post.body}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default PostsList;