import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint=('http://localhost:8000/api')

const ShowUsuario = () => {

    const [Usuarios, setUsuarios]=useState( [] )
    useEffect(()=>{
        getAllUsuarios()
    },[])
      

    const getAllUsuarios=async()=>{
        const response=await axios.get('${endpoint}/usuarios')
        setUsuarios(response)
    }

    const deleteUsuarios=async(id)=>{
        await axios.delete('${endpoint}/usuario/{id}')
        getAllUsuarios()
    }
  return (
    <div>
       <div className='d-grid gap-2'>
          <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
       </div>
       <table className='table table.striped'>
        <thead className='bg-primary text-white'>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Maestra</th>
                <th>Libro</th>
            </tr>
        </thead>

        <tbody>
            {Usuarios.map((usuario)=>(
                <tr key={usuario.id}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.edad}</td>
                    <td>{usuario.maestra}</td>
                    <td>{usuario.libro}</td>
                    <td>
                        <Link to={'/edit/${usuario.id}'} className='btn btn-warning'>Edit</Link>
                        <button onClick={()=>deleteUsuarios(usuario.id)} className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
    
  )
}

export default ShowUsuario
