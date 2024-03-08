import React from 'react'
import Header from '../components/shared/Header'

const Home = () => {
  return (
    <section className='bg-dark text-white h-screen overflow-auto font-urbanist  bg-[url(/imgs/bg-register-mobile.png)] bg-no-repeat bg-right-bottom sm:bg-[url(/imgs/bg-register-desktop.png)] grid grid-rows-[auto_1fr] overflow-x-hidden'>

      <Header></Header>
      
      <section className='p-4'>
        <main className='bg-primary-dark p-7 px-4 rounded-2xl mt-11 max-w-[562px] mx-auto sm:px-16'>
          <form action="" className='flex items-center gap-2 bg-white/20 p-3 rounded-xl max-w-[430px] mx-auto'>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            <input 
              className="bg-transparent outline-none flex-1" 
              size={10}
              type="text" 
              placeholder='Buscar...'
              id=""
            />
            <select 
              className="bg-transparent outline-none" 
              name=""
              id="">
              <option value="">10</option>
            </select>
          </form>
        </main>
      </section>

    </section>
  )
}

export default Home


/**
 bg-dark text-white h-screen overflow-auto font-urbanist  bg-[url(/imgs/bg-register-mobile.png)] bg-no-repeat bg-right-bottom sm:bg-[url(/imgs/bg-register-desktop.png)]
 */