import "./App.css";
import Header from "./components/Header";
import { LoginForm, RegistrationForm } from "./components/Forms";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register">
              <RegistrationForm />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
