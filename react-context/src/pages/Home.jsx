import { Link } from "react-router";
import PostsList from "../components/PostsList";

const Home = () => {
    return (
        <div className="App">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl mt-20  leading-8 text-black font-bold tracking-wide uppercase">
                    Posts app
                </h2>
            </div>
            <div className="grid justify-center mt-5">
                <Link className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" to="/add">Add a new Post</Link>
            </div>
            <PostsList/>
        </div>
    );
};

export default Home;