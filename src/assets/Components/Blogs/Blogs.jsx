import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handlerBookmarks, handlerMarkAsTime }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 space-y-2">
            <h1 className="md:text-3xl font-semibold">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handlerBookmarks={handlerBookmarks} handlerMarkAsTime={handlerMarkAsTime} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;