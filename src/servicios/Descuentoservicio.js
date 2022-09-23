import axios from "axios";
const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/descuentos';


class Descuentoservice{
    getAllDescuentos(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createDescuentos(descuento)
    {
        return axios.post(EMPLOYEE_BASE_REST_API_URL,descuento) 
    }
    
}

export default new Descuentoservice();

