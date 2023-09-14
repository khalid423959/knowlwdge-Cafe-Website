import PropTypes from 'prop-types'
import { FaBookReader } from 'react-icons/fa';

const Blog = ({ blog, handlerBookmarks, handlerMarkAsTime }) => {
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-10 space-y-4'>
            <img className='w-full shadow-2xl' src={cover} alt={` cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-10 h-10 md:w-14 md:h-14' src={author_img} alt="" />
                    <div className='ml-4 text-start'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min Read</span>
                    <button onClick={() => handlerBookmarks(blog)} className='ml-3 text-2xl text-blue-400'><FaBookReader></FaBookReader></button>
                </div>
            </div>
            <h2 className='text-2xl md:text-3xl text-start'>{title}</h2>
            <p className='text-start'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='underline text-start' onClick={() => handlerMarkAsTime(id, reading_time)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired

}
export default Blog;