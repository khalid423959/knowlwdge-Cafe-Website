
import profile from '../image/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2'>
            <h1 className='text-2xl md:text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;