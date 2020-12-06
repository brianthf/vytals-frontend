import "./App.css";
import Header from "./components/Header";
import { LoginForm, RegistrationForm } from "./components/Forms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
