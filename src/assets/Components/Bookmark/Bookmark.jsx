
import PropTypes from 'prop-types';
import Booktitle from './Booktitle';

const Bookmark = ({ bookmarks, readtime }) => {
    return (

        <div className="md:w-1/3 text-3xl bg-gray-300 ml-4  mt-4 text-center rounded-2xl">
            <div className='bg-slate-400 mb-10 py-4 rounded-xl font-bold'>
                <h1>Reading Time: {readtime} min</h1>
            </div>
            <h2 className='font-semibold'>Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((booktitle, idx) => <Booktitle key={idx} booktitle={booktitle}></Booktitle>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmark;