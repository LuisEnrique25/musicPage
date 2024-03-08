import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ContainerAuth from '../components/layaouts/ContainerAuth'
import { login } from '../store/slices/user.slice'


const Login = () => {

  const dispatch = useDispatch();

  const hasndleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(login(data))    
  }
  return (
    <ContainerAuth>
       <div className='hidden sm:block'>
          <img src='/imgs/login-img.png' alt='' className='rounded-2xl max-w-[300px]'/>
        </div>
        <main>
          <form onSubmit={hasndleSubmit} className='grid gap-4'>
            <h2 className='text-2xl uppercase font-semibold'>Iniciar Sesión</h2>
            <label className='grid gap-3'>
              <span className='text-white/60 text-sm'>E-mail</span>
              <input className='bg-transparent border-b border-secondary outline-none text-lg focus:border-blue-500'
               type="email"
               name='email' 
               required 
                />
            </label>
           
            <label className='grid gap-3'>
              <span className='text-white/60 text-sm'>Password</span>
              <input className='bg-transparent border-b border-secondary outline-none text-lg focus:border-blue-500' 
              type="password" 
              name='password' 
              required />
            </label>
            <button className='bg-primary-light uppercase rounded-full p-2 font-semibold max-w-max px-6 mx-auto mt-8 shadow-md shadow-purple-500/40 hover:shadow-purple-300/40 hover:tracking-widest transition-all'>Entrar</button>
            <Link to='/register' className='max-w-max mx-auto text-sm underline'>Crear Cuenta Nueva</Link>
          </form>
        </main>
    </ContainerAuth>
  )
}

export default Login