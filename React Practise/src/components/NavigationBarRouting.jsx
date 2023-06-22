import React  from 'react';
import ArrayUsingList from './ArrayUsingList';
import FetchApiTable from './FetchApiTable';
// import Reusablecompo from './Reusablecompo';
import Search from './Search';
import ToDOList from './ToDoList';
import BasicFormValidation from './BasicFormValidation';

import{ BrowserRouter as Router,
Routes,
Route,
Link } from 'react-router-dom';



function NavigationBarRouting(){
const Data={"/arrayusinglist":"ArrayUsingList","/fetchapitable":"FetchApiTable",'/todolist':"ToDoList",'/search':'Search',"/basicformvalidation":"BasicFormValidation" }

const DynamicNavbar=Object.entries(Data).map((Response)=>{
  return<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to={Response[0]}>{Response[1]}</Link>
</li>

})

return(
<>
<Router>
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-info navbar-light" >
  <div className="container-fluid">
    <Link className="navbar-brand" to={""}>Completed Task in React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/arrayusinglist"}>ArrayUsingList</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/fetchapitable"}>FetchApiTable</Link>
        </li>     */}
        {DynamicNavbar}
      </ul>
    
    </div>
    
  </div>
</nav>

{/* <h1>Hello World</h1> */}
<Routes>  
<Route path='/arrayusinglist' element={<ArrayUsingList/>}></Route>
<Route path='/fetchapitable' element={<FetchApiTable/>}></Route>
{/* <Route path='/reusablecompo' element={<Reusablecompo/>}></Route> */}
<Route path='/toDoList' element={<ToDOList/>}></Route>
<Route path='/search' element={<Search/>}></Route>
<Route path='/basicformvalidation' element={<BasicFormValidation/>}></Route>
</Routes>
</Router>
</>)
}

export default NavigationBarRouting