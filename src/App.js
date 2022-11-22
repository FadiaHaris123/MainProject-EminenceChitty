import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Auth from "./UI/Auth"
import LandingPage from "./components/LandingPage"


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          {/* <Route path="/auth" element={<Auth />} /> */}
        </Switch>
      </Router>
  )
}

export default App