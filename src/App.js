import { Route } from "react-dom";

import Header from "./components/Header";
import ListOfAllEmployees from "./components/listOfAllEmployees";

function App() {
  return (
    <div >
      <Header/>
      <ListOfAllEmployees/>
    </div>
  );
}

export default App;
