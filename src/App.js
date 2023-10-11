import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Feed, ChannelDetail, Navbar, SearchFeed, VideoDetails, SearchBar} from './components';


const App = () => (
    <BrowserRouter>
      <div className=' bg-black text-white h-full overflow-x-hidden overflow-y-hidden'>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        </Routes>
      </div>
    </BrowserRouter>
)

export default App
