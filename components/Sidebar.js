import React from 'react'
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'

function Sidebar() {
  const  {categorias, isLoading} = useQuiosco()
  // console.log(categorias)
  return (
    <React.Fragment>
        <div className='flex justify-center p-3'>
          <Image 
                // style={{width:"auto", height:"auto"}}
                width={140}
                height={100}
                priority
                src='/assets/img/logo.svg'
                alt='imagen logotipo'
            />
        </div>
        
        <nav className='mt-10'>
          {!isLoading ? categorias.map(categoria => (
            <Categoria
              key={categoria.id} 
              categoria={categoria}
            />
          ))
        : <h1>Loading...</h1>
        }
        </nav>
    </React.Fragment>
  )
}
export default Sidebar;