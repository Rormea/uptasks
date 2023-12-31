import React from 'react'
import { Link } from 'react-router-dom'
import useProjects from '../hooks/useProjects'
import Search from './Search';
import useAuth from '../hooks/useAuth';



const Header = () => {

    const { handleSearch, logOutProjects } = useProjects();
    const { logOutAuth } = useAuth();

    const handleLogOut = () => {

        logOutProjects();
        logOutAuth();
        localStorage.removeItem('token')
    };


    return (
        <header className='px-4 py-5 bg-white border-b'>
            <div className='md:flex md:justify-between' >
                <h2 className='text-4xl text-sky-600 font-black text-center mb-5 md:mb-0' >UpTask</h2>



                <div className='flex flex-col md:flex-row items-center gap-3' >

                    <button
                        type='button'
                        className='font-bold uppercase'
                        onClick={handleSearch}
                    >
                        Buscar Proyecto
                    </button>
                    <Link to='/projects' className='font-bold uppercase' >
                        Proyectos
                    </Link>

                    <button
                        onClick={handleLogOut}
                        type='button' className='text-white text-sm font-bold bg-sky-600 p-2 rounded-md' >
                        Cerrar Sesión
                    </button>

                    <Search />
                </div>


            </div>
        </header>
    )
}

export default Header