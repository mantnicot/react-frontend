import axios from "axios";
const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/cursos';


class Cursoservice{
    getAllCursos(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)    
    }

    createCurso(curso)
    {
        return axios.post(EMPLOYEE_BASE_REST_API_URL,curso) 
    }
    getCursoid(cursoid)
    {
        return axios.get(EMPLOYEE_BASE_REST_API_URL+"/"+cursoid) 
    }
    updatecurso(id, curso)
    {
        return axios.put(EMPLOYEE_BASE_REST_API_URL+"/"+id,curso)
    }
}

export default new Cursoservice();

