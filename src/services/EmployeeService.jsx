import axios from "axios";

const EMP_API_BASE_URL = 'http://localhost:8080/api/employees';

class EmployeeService {
    getlistOfAllEmployees() {
        return axios.get(EMP_API_BASE_URL);
    }
    addEmployee(employee)   {
        return axios.post(EMP_API_BASE_URL, employee);
    }
}
export default new EmployeeService();