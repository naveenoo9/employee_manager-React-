import axios from "axios";

const EMP_API_BASE_URL = 'https://my-employee-manager-postgresql.herokuapp.com/api/employees';

class EmployeeService {
    getlistOfAllEmployees() {
        return axios.get(EMP_API_BASE_URL);
    }    
}
export default new EmployeeService();