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
import PrivateRoutes from './components/Auth/PrivateRoutes'
import Page404 from './pages/Page404'


function App() {

  return (
    <main >
        {/** Aqui va la configuracion de las rutas */}
        <Routes>
          {/**Rutas Publicas */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/playlists/public/:id' element={<PlaylistPublic/>}/>
          
          {/**Rutas Privadas */}
           <Route element= {<PrivateRoutes/>} >

            <Route path='/' element={<Home/>}/>
            <Route path='/playlists' element={<Playlists/>} />
            <Route path='/playlists/:id' element={<PlaylistDetail/>} />
            <Route path='/tracks/:id' element={<TrackDetail/>} />
            <Route path='/artists/:id' element={<ArtistsDetail/>} />
        
          </Route>

        <Route path='*' element={<Page404/>}/>

          
        </Routes>
      
    </main>
  )
}

export default App
