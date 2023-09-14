import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmark from './assets/Components/Bookmark/Bookmark'
import Header from './assets/Components/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readtime, setReadtime] = useState(0)

  const handlerBookmarks = blog => {
    const Newbookmark = [...bookmarks, blog]
    setBookmarks(Newbookmark)
  }

  const handlerMarkAsTime = (id, time) => {
    const newtime = (readtime + time)
    setReadtime(newtime)
    //remove read 
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)
  }
  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-6xl'>
        <Blogs handlerBookmarks={handlerBookmarks} handlerMarkAsTime={handlerMarkAsTime}></Blogs>
        <Bookmark bookmarks={bookmarks} readtime={readtime}></Bookmark>
      </div>

    </>
  )
}

export default App
