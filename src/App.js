import Footer from "./components/Footer";
import "./App.css";
import Header from "./components/Header";
import ListOfAllEmployees from "./components/listOfAllEmployees";
import SaveEmployee from "./components/SaveEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";


function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={ListOfAllEmployees}></Route>
            <Route path="/employees/" component={ListOfAllEmployees}></Route>
            <Route path="/add-employee/" component={SaveEmployee} ></Route>
            <Route path="/update-employee/:empId" component={UpdateEmployee}></Route>
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;