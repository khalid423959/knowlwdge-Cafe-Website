import PropTypes from 'prop-types'
import { FaBookReader } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-10'>
            <img className='w-full' src={cover} alt={` cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-6 mt-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min Read</span>
                    <button className='ml-3 text-2xl text-blue-400'><FaBookReader></FaBookReader></button>
                </div>
            </div>
            <h2 className='text-3xl text-start mb-3'>{title}</h2>
            <p className='text-start'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired

}
export default Blog;