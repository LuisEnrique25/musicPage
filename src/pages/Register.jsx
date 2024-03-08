import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import ContainerAuth from '../components/layaouts/ContainerAuth';

const BASE_URL = "https://backend-final-projectreact-dev-pbdc.2.us-1.fl0.io"

const Register = () => {

  const hasndleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    axios.post(`${BASE_URL}/api/auth/register`, data)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
    
  }

  return (
    <ContainerAuth >
        <div className='hidden sm:block'>
          <img src='/imgs/musicRegister.png' alt='' className='rounded-full max-w-[300px]'/>
        </div>
        <main>
          <form onSubmit={hasndleSubmit} className='grid gap-4'>
            <h2 className='text-2xl uppercase font-semibold'>Cuenta Nueva</h2>
            <label className='grid gap-3'>
              <span className='text-white/60 text-sm'>E-mail</span>
              <input className='bg-transparent border-b border-secondary outline-none text-lg focus:border-blue-500'
               type="email"
               name='email' 
               required 
                />
            </label>
            <label  className='grid gap-3'>
              <span className='text-white/60 text-sm'>Nombre de Usuario</span>
              <input className='bg-transparent border-b border-secondary outline-none text-lg focus:border-blue-500'
              type="text" 
              name='name' 
              required/>
            </label>
            <label className='grid gap-3'>
              <span className='text-white/60 text-sm'>Password</span>
              <input className='bg-transparent border-b border-secondary outline-none text-lg focus:border-blue-500' 
              type="password" 
              name='password' 
              required />
            </label>
            <button className='bg-primary-light uppercase rounded-full p-2 font-semibold max-w-max px-6 mx-auto mt-8 shadow-md shadow-purple-500/40 hover:shadow-purple-300/40 hover:tracking-widest transition-all'>Crear</button>
            <Link to="/login" className='max-w-max mx-auto text-sm underline'>Iniciar Sesión</Link>
          </form>
        </main>

      </ContainerAuth>
  )
}

export default Register