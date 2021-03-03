import axios from "axios";

// local host
//const EMP_API_BASE_URL = 'http://localhost:8080/api/employees/';
const EMP_API_BASE_URL = 'https://my-employee-manager-postgresql.herokuapp.com/api/employees';

class EmployeeService {
    getlistOfAllEmployees() {
        return axios.get(EMP_API_BASE_URL);
    }
    addEmployee(employee)   {
        return axios.post(EMP_API_BASE_URL, employee);
    }
    getEmployeeById(empId)  {
        return axios.get(EMP_API_BASE_URL+'/'+empId);
    }
    updateEmployeeBiId(empId, employee) {
        return axios.put(EMP_API_BASE_URL+'/'+empId, employee);
    }
    deletEmployeeById(empId)    {
        return axios.delete(EMP_API_BASE_URL+'/'+empId);
    }
}
export default new EmployeeService();