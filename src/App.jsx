import EmployeeList from './component/EmployeeList.jsx'
import React, { Component} from "react"

class  App extends Component {
render() {
  return(
    <div >
    <h1 data-cy="header">Employee List </h1>
    <EmployeeList />
    </div>
  )
}
}

export default App;
