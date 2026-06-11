import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Tags from './pages/Tags'
import About from './pages/About'
import NewPost from './pages/NewPost'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/tags/:tag" element={<Tags />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
