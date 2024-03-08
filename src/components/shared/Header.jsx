import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PlaylistIcon } from '../icons/Svgs'
import { logout } from '../../store/slices/user.slice';
import { useDispatch } from 'react-redux';

const Header = () => {

    const [isShowAuth, setIsShowAuth] = useState(false);
    const dispatch = useDispatch();

    const handleLogOut = () =>{
        dispatch(logout())
    }

    const handleToggleAuth = () => {
        setIsShowAuth(!isShowAuth)
    }


  return (
    <header className='flex items-center justify-between p-4 bg-primary-dark relative'>
        <Link className='uppercase font-semibold'>Gift Music</Link>
        <div className='flex items-center gap-2 text-sm'>
          <button onClick={handleToggleAuth} className='uppercase hover:bg-primary-light p-1 px-4 rounded-full border border-secondary'>Mi Cuenta</button>
          <button className='uppercase hover:bg-primary-light p-1 px-4 rounded-full border border-secondary flex gap-2 items-center '><PlaylistIcon/> <span className='hidden sm:inline'></span></button>
        </div>

        {/*PopUp Auth */}
        <div className={`absolute  -bottom-4 translate-y-full bg-primary-light grid gap-2 p-3 px-5 rounded-xl border border-secondary transition-all ${isShowAuth ? "right-4" : "-right-full" }`}>
            <Link className='flex items-center gap-1' to='/playlists'>
                <i className="fa-solid fa-play"></i> Mis Grabaciones
            </Link>
            <button className='flex items-center gap-1' onClick={handleLogOut} >
                <i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
            </button>
        </div>
      </header>
  )
}

export default Header