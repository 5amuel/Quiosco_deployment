import React from 'react'
import { useRouter } from 'next/router'


const pasos =[
    {paso:1, nombre: 'Menu', url:'/'},
    {paso:2, nombre: 'Resumen', url:'/resumen'},
    {paso:3, nombre: 'Datos y Total', url:'/total'},

]

export default function Pasos() {
    const router = useRouter()
    
    const calcularProgreso = () => {
        // const porcentaje = (paso / 3) * 100
        // console.log(porcentaje)
        // return porcentaje
        let valor
        if(router.pathname === '/') {
            valor = 2
        }else if(router.pathname === '/resumen'){
            valor = 50           
            
        }else {
            valor = 100
        }
        return valor
    }


  return (
    <React.Fragment>
        <div className='flex justify-between mb-5'>
            {pasos.map(paso => (
                <button
                    onClick={() => {
                        router.push(paso.url);
                    }}
                    className='text-2xl font-bold'
                    key={paso.paso}
                >{paso.nombre}</button>
            ))}
        </div>
        <div className='bg-gray-100 mb-10'>
            <div 
                style={{ width: `${calcularProgreso()}%` }}
                // className='duration-[.2s] rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-1'>
                className='rounded-full bg-amber-500 h-2 duration-500'>
            </div>
        </div>
    </React.Fragment>
  )
}
