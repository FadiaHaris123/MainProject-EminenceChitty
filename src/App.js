import "bootstrap/dist/css/bootstrap.min.css" 
import "./App.css"
import {BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Auth from "./UI/Auth"
import registrationForm from "./UI/registrationForm"
import foreman from "./components/foreman/foreman"
import Manager from "./components/foreman/Manager/Manager"
import ManagerPage from "./components/Manager/ManagerPage"
import Customer from "./components/Customer/Customer"
import LandingPage from "./components/LandingPage/LandingPage"



function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route path="/login" component={Auth} />
          <Route path="/register" component={registrationForm}/>
          <Route path="/admin" component={foreman} />
          <Route path="/employee" component={Manager}/>
          <Route path="/manager" component={ManagerPage}/>
          <Route path="/customer" component={Customer}/>
        </Switch>
      </Router>
  )
}

export default App
