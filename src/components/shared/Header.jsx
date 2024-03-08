import React from 'react'
import { Link } from 'react-router-dom'
import { PlaylistIcon } from '../icons/Svgs'

const Header = () => {

    const [isShowAuth, setIsShowAuth] = useState(false);

    const handleLogOut = () =>{
        
    }


  return (
    <header className='flex items-center justify-between p-4 bg-primary-dark relative'>
        <Link className='uppercase font-semibold'>Gift Music</Link>
        <div className='flex items-center gap-2 text-sm'>
          <button className='uppercase hover:bg-primary-light p-1 px-4 rounded-full border border-secondary'>Mi Cuenta</button>
          <button className='uppercase hover:bg-primary-light p-1 px-4 rounded-full border border-secondary flex gap-2 items-center '><PlaylistIcon/> <span className='hidden sm:inline'></span></button>
        </div>

        {/*PopUp Auth */}
        <div className='absolute right-4 -bottom-4 translate-y-full bg-primary-light grid gap-2 p-3 rounded-xl'>
            <Link>Mis Grabaciones</Link>
            <button>Cerrar Sesión</button>
        </div>


      </header>
  )
}

export default Header