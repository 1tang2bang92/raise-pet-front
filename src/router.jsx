import { Routes, Route } from "react-router-dom"
import Indexpage from "./pages"
import Animal from "./pages/animal"
import Dog from './pages/dog'
import Cat from './pages/cat'
import Bird from './pages/bird'
import Rabbit from './pages/rabbit'
import Chat from './pages/chat'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Indexpage/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/animal" element={<Animal/>} />
      <Route path="/dog" element={<Dog/>} />
      <Route path="/cat" element={<Cat/>} />
      <Route path="/bird" element={<Bird/>} />
      <Route path="/rabbit" element={<Rabbit/>} />
    </Routes>
  )
}

export default Router