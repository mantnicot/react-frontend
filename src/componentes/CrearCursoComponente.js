import React,{useState, useEffect} from 'react'
import Cursoservicio from '../servicios/Cursoservicio'
import { useParams } from 'react-router-dom'


const CrearCursoComponente = () => {

    const [nombre, setnombre] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [costo1, setcosto] = useState('')
    const [dirigido, setdirigido] = useState('')
    const [modalidad1, setmodalidad] = useState('')
    const [horas1, sethoras] = useState('')
    const {id} = useParams();


    useEffect(() => {

        Cursoservicio.getCursoid(id).then(response =>(
                    setmodalidad(response.data.modalidad),
                    sethoras(response.data.horas),
                    setdirigido(response.data.dirigido),
                    setnombre(response.data.nombre),
                    setdescripcion(response.data.descripcion),
                    setcosto(response.data.costo)
                         
        )).catch(error=>
            {
                console.log(error)
            }
            )
         }, [])

    const guardareditarcurso= (e) =>{
        e.preventDefault();
        const modalidad = {    idmodalidad:modalidad1} 
        const costo = Number(costo1)
        const horas = Number(horas1)
        const curso = {costo,descripcion,dirigido,horas,modalidad,nombre}
        console.log(curso)
        if(id){
            Cursoservicio.updatecurso(id,curso). then((response)=>{
                window.location.replace("http://localhost:3000/");     
            }).catch(error =>{
                console.log(error);
            })
        }else{
            Cursoservicio.createCurso(curso).then((response)=>{
                console.log(response.data);
            }).catch(error =>{
                console.log(error);
            })
        }
    }


   const titulo = () =>{

        if(id)
        {
                return <h2 className='text-center'>Editar Curso</h2>
        }else{
                return <h2 className='text-center'>Agregar Curso</h2>
        }   

    }
  return (
    <div>
        
        <div className='container'>
        <div className='card col-mo-6 offset-md-3 offset-md-3'>
           {
            titulo()
           }
            <form>
            <div className='form-gropu mb-2'>
            <label className='form-label'> Nombre : </label>
            <input type="text"
                placeholder='Ingrese el nombre'
                name='nombre' 
                className='form-control'
                value={nombre}
                onChange={(e)=>setnombre(e.target.value)} required></input>
            </div>

            <div className='form-gropu mb-2'>
            <label className='form-label'> Descripcion : </label>
            <input type="text"
                placeholder='Ingrese la descripcion'
                name='descripcion' 
                className='form-control'
                value={descripcion}
                onChange={(e)=>setdescripcion(e.target.value)} required></input>
            </div>
            <div className='form-gropu mb-2'>
            <label className='form-label'> valor : </label>
            <input type="number"
                placeholder='Ingrese el valor del curso'
                name='costo1' 
                className='form-control'
                value={costo1}
                onChange={(e)=>setcosto(e.target.value)} required></input>
            </div>
            <div className='form-gropu mb-2'>
            <label className='form-label'> Dirigido a : </label>
            <input type="text"
                placeholder='Ingrese a quien esta dirigido'
                name='dirigido' 
                className='form-control'
                value={dirigido}
                onChange={(e)=>setdirigido(e.target.value)} required></input>
            </div>
            <div className='form-gropu mb-2'>
            <label className='form-label'> horas : </label>
            <input type="number"
                placeholder='Diga cuantas horas tiene el curso'
                name='horas1' 
                className='form-control'
                value={horas1}
                onChange={(e)=>sethoras(e.target.value)} required></input>
            </div>
            <div className='form-gropu mb-2'>
            <label for="modalidade" className='form-label'> modalidad : </label>
            <datalist id="modalidades">
                    <option value="1">Privado</option>
                    <option value="2">Virtual</option>
                    <option value="3">OnDemand</option>
                    </datalist>
            <input type="number" 
                list='modalidades'
                multiple name='modalidad' 
                className='form-control'
                value={modalidad1}
                onChange={(e)=>setmodalidad(e.target.value)} required>              
                </input>
            </div>
            <button className='btn btn-success' onClick={(e)=> guardareditarcurso(e)}>Agregar</button>
            </form>  
        </div> 
        </div>
    </div>
  )
}

export default CrearCursoComponente