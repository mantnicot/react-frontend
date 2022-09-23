import React,{useState, useEffect} from 'react'
import Descuentoservicio from '../servicios/Descuentoservicio'
import Cursoservicio from '../servicios/Cursoservicio'
import { useParams  } from 'react-router-dom'


const CrearDescuentoComponente = () => {

    const [nombre, setnombre] = useState('')
    const [pais, setpais] = useState('')
    const [descuento, setdescuento] = useState('')
    const [fecha_final1, setfecha_final] = useState('')
    const [modalidad1, setmodalidad] = useState('')
    const [modalidad2, setmodalidad1] = useState('')
    const [nombrecurso, setnombrecurso] = useState('')
    const {id} = useParams();
    
    useEffect(() => {    
        Cursoservicio.getCursoid(id).then(response =>(
                    setnombrecurso(response.data.nombre),  
                    setmodalidad(response.data.modalidad.nombre),    
                    setmodalidad1(response.data.modalidad.idmodalidad),              
                    setdescuento((response.data.costo))
        )).catch(error=>
            {
                console.log(error)
            }
            )      
    }
    
    , [])
        
         
    const Creardescuento= (e) =>{
        e.preventDefault();
        const modalidad = {idmodalidad:modalidad2} 
        const curso = {idcurso:id} 
        const fecha_final =fecha_final1+"T05:00:00.000+00:00"
        const descuentofinal = {curso,descuento,fecha_final,modalidad,nombre,pais}  
        console.log(descuentofinal)     
        Descuentoservicio.createDescuentos(descuentofinal).then((response)=>{
                console.log(response.data);
            }).catch(error =>{
                console.log(error);
            })
        
    }
  return (
    
    <div>
        <div className='container'>
        <div className='card col-mo-6 offset-md-3 offset-md-3'>
        <h2 className='text-center'>Agregar Descuento</h2>
            <form>
            <div className='form-gropu mb-2'>
            <label className='form-label'> Nombre : </label>
            <input type="text"
                placeholder='Ingrese el nombre del descuento'
                name='nombre' 
                className='form-control'
                value={nombre}
                onChange={(e)=>setnombre(e.target.value)} required></input>
            </div>

            <div className='form-gropu mb-2'>
            <label className='form-label'> Pais : </label>
            <input type="text"
                placeholder='Ingrese el pais'
                name='pais' 
                className='form-control'
                value={pais}
                onChange={(e)=>setpais(e.target.value)} required></input>
            </div>
            <div className='form-gropu mb-2'>
            <label className='form-label'>Valor total del curso : </label>
            <input  readOnly value={descuento}   type="text"
                name='descuento' 
                className='form-control'
                onChange={(e)=>setdescuento(e.target.value)}></input>
            </div>
            <div className='form-gropu mb-2'>
            <label className='form-label'> Fecha final : </label>
            <input type="date"
                placeholder='Ingrese la fecha final del curso'
                name='fecha_final1' 
                className='form-control'
                value={fecha_final1}
                onChange={(e)=>setfecha_final(e.target.value)} required></input>
            </div>
            <div className='form-gropu mb-2'>
            <label className='form-label'> Nombre del curso : </label>
            <input  readOnly value={nombrecurso}   type="text"
                name='nombrecurso' 
                className='form-control'
                onChange={(e)=>setnombrecurso(e.target.value)}></input>
            </div>

            <div className='form-gropu mb-2'>
            <label className='form-label'> Tipo de modalidad : </label>
            <input  readOnly value={modalidad1}   type="text"
                name='modalidad1' 
                className='form-control'
                onChange={(e)=>setmodalidad(e.target.value)}></input>
            </div>
            <button className='btn btn-success' onClick={(e)=> Creardescuento(e)}>Agregar</button>
            
            </form>  
        </div> 
        </div>
    </div>
  )
}

export default CrearDescuentoComponente