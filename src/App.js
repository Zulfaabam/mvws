import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Movie from './pages/Movie'
import MovieDetail from './pages/MovieDetail'
import Actor from './pages/Actor'
import ActorDetail from './pages/ActorDetail'
import About from './pages/About'
import BottomNav from './components/BottomNav'

const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate replace to="/movie" />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/actor" element={<Actor />} />
          <Route path="/actor/:actorId" element={<ActorDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <BottomNav />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
