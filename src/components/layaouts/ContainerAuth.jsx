const ContainerAuth = ({children}) => {
  return (
    <section className='bg-dark text-white h-screen overflow-auto font-urbanist p-4 flex justify-center items-center bg-[url(/imgs/bg-register-mobile.png)] bg-no-repeat bg-right-bottom sm:bg-[url(/imgs/bg-register-desktop.png)] '>
        <article className='sm:grid sm:grid-cols-2 gap-8 items-center'>
            {children}
        </article>
    </section>
  )
}
export default ContainerAuth;