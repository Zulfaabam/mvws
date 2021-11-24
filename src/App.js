import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Find from './pages/Find'
import FindDetail from './pages/FindDetail'
import Actor from './pages/Actor'
import ActorDetail from './pages/ActorDetail'
import About from './pages/About'
import BottomNav from './components/BottomNav'

const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <div className="app">
        <header>
          <h1>MOVIEWS</h1>
        </header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/find" />} />
          <Route path="/find" element={<Find />} />
          <Route path="/find/title/:itemId/" element={<FindDetail />} />
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
