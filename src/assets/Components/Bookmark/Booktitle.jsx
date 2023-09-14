
import PropTypes from 'prop-types';

const Booktitle = ({ booktitle }) => {
    const { title } = booktitle;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2 className='text-xl'>{title}</h2>
        </div>
    );
};

Booktitle.propTypes = {
    booktitle: PropTypes.object
};

export default Booktitle;