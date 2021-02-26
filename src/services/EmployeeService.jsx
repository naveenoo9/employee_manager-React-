import axios from "axios";

const EMP_API_BASE_URL_LOCALHOST = 'http://localhost:8080/api/employees', EMP_API_BASE_URL = 'https://my-employee-manager-postgresql.herokuapp.com/api/employees';

class EmployeeService {
    getlistOfAllEmployees() {
        return axios.get(EMP_API_BASE_URL);
    }
    addEmployee(employee)   {
        return axios.post(EMP_API_BASE_URL, employee);
    }
}
export default new EmployeeService();