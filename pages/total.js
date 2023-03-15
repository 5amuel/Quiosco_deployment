import React from 'react'
import Layout from '@/layout/Layout'
import { useEffect, useCallback } from 'react'
import useQuiosco from '@/hooks/useQuiosco'
import { formatearDinero } from '@/helpers'

export default function Total() {
  const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  },[pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  },[pedido, comprobarPedido])

 

  return (
    <Layout pagina='Total a Pagar'>
        <h1 className='text-4xl font-black'>Total</h1>
        <p className='text-2xl my-10'>Confirma tu Pedido a Continuacion:</p>
        <form onSubmit={colocarOrden}>
          <div>
            <label
              htmlFor='nombre'
              className='block uppercase text-slate-800 font-bold text-xl'>Nombre</label>
            <input 
              id='nombre'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className='bg-gray-200 w-full lg:w-1/3 mt-3 rounded-md p-2' 
              type="text" />
          </div>
          <div className='mt-10'>
            <p className='text-2xl'>Total a pagar: {''} <span className='font-bold'>{formatearDinero(total)}</span></p>
          </div>
          <div className='mt-5'>
            <input 
              className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800' } w-full lg:w-auto px-5 py-2 rounded uppercase text-center font-bold text-white`}
              type="submit" 
              value='Confirmar pedido' 
              disabled={comprobarPedido()}
              />

          </div>

        </form>
    </Layout>
  )
}
