import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import PlaylistDetail from './pages/PlaylistDetail'
import Playlists from './pages/Playlists'
import TrackDetail from './pages/TrackDetail'
import ArtistsDetail from './pages/ArtistsDetail'
import PlaylistPublic from './pages/PlaylistPublic'


function App() {

  return (
    <main >
        {/** Aqui va la configuracion de las rutas */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/playlists' element={<Playlists/>} />
          <Route path='/playlists/:id' element={<PlaylistDetail/>} />
          <Route path='/tracks/:id' element={<TrackDetail/>} />
          <Route path='/artists/:id' element={<ArtistsDetail/>} />


          <Route path='/playlists/public/:id' element={<PlaylistPublic/>}/>

        </Routes>
      
    </main>
  )
}

export default App
