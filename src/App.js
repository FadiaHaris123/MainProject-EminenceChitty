import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Auth from "./UI/Auth"
import LandingPage from "./components/LandingPage"
import registrationForm from "./UI/registrationForm"


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route path="/login" component={Auth} />
          <Route path="/register" component={registrationForm}/>
        </Switch>
      </Router>
  )
}

export default App