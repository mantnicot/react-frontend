import React,{useState, useEffect} from 'react'
import Cursoservicio from '../servicios/Cursoservicio'
import Lista_descuentos_componente from './Lista_descuentos_componente.js';

const Lista_cursos_componente =() => {

    const [cursos, setcursos] = useState([])
   

 useEffect(() => {
    Cursoservicio.getAllCursos().then((response)=>{
        setcursos(response.data)
    }).catch(error =>{
        console.log(error);
    }) 
 }, [])
 
 function filtro() {
    let valor = document.getElementById("myInput").value.toUpperCase();
    let nombres = document.getElementById("cursos");
    let filas = nombres.getElementsByTagName("tr");
    for(let i = 0; i < filas.length; i++){
      let columnaLenguaje = filas[i].getElementsByTagName("td")[5];
      let lenguaje = columnaLenguaje.textContent;
      filas[i].style.display = lenguaje.toUpperCase().indexOf(valor) > -1 ? "" : "none";
    }
  }
  var archivo = document.getElementById("myInput");
if(archivo)
{
    archivo.addEventListener("keyup", filtro);
}
  
  return (
    <div className='container'>
        <h2 className='text-center'>Lista de cursos</h2>
        <a href="http://localhost:3000/crear-curso" className='btn btn-primary mb-2'> Agregar Curso</a>
        <input type="text" id="myInput"  placeholder="Filtrar modalidad"></input>
        <table id="myTable" className='table table-bordered table-striped'> 
                 <thead>    
                    <th>Nombre </th>
                    <th>Descripcion</th>
                    <th>valor </th>
                    <th>Dirigido a </th>
                    <th>Horas</th>
                    <th>Modalidad</th>
                    <th>Acciones</th>
                 </thead>
                 <tbody id="cursos">
                    {
                        cursos.map(
                            curso    =>
                            <tr key = {curso.idcurso}>
                                <td>{curso.nombre}</td>
                                <td>{curso.descripcion}</td>
                                <td>{curso.costo}</td>
                                <td>{curso.dirigido}</td>
                                <td>{curso.horas}</td>
                                <td>{curso.modalidad.nombre}</td>
                                <td>  <a className='btn btn-primary' href={`/editarcurso/${curso.idcurso}`}>Editar  </a>  
                                  <a className='btn btn-success' href={`/crear-descuento/${curso.idcurso}`}>Crear Descuento</a></td>  
                            </tr>
                        )
                        
                    }
                 </tbody>
        
        </table>
            
     <Lista_descuentos_componente/>
     
    </div> 
    
  ) 
}

export default Lista_cursos_componente