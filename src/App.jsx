import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmark from './assets/Components/Bookmark/Bookmark'
import Header from './assets/Components/Header'

function App() {


  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-6xl'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>

    </>
  )
}

export default App
