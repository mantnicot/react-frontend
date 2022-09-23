import React,{useState, useEffect} from 'react'
import Descuentoservicio from '../servicios/Descuentoservicio'
import moment from "moment";
const Lista_descuentos_componente =() => {

    const [descuentos, setdescuentos] = useState([])


 useEffect(() => {
    Descuentoservicio.getAllDescuentos().then((response)=>{
        setdescuentos(response.data)
    }).catch(error =>{
        console.log(error);
    }) 
 }, [])
 
  return (
    
    <div className='container'>
        
        <h2 className='text-center'>Lista de Descuentos</h2>
        <table className='table table-bordered table-striped'> 
                 <thead>  
                     <th>Nombre </th>
                     <th>Modalidad</th>
                     <th>pais </th>
                    <th>Descuento </th>
                     <th>Curso</th>
                    <th>Fecha final</th>
                 </thead>
                 <tbody>
                    {
                            descuentos.map(
                                descuento    =>
                                <tr key ={descuento.iddescuento}>
                                    <td>{descuento.nombre}</td>
                                    <td>{descuento.modalidad.nombre}</td>
                                    <td>{descuento.pais}</td>
                                    <td>{descuento.descuento}</td>
                                    <td>{descuento.curso.nombre}</td>
                                    <td>{moment(descuento.fecha_final).utc().format('YYYY-MM-DD')}</td>  
                                    </tr>
                        )
                        
                    }
                 </tbody>
        
        </table>
     
    </div> 
    
  )
}

export default Lista_descuentos_componente
























