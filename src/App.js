import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import NotFound from "./containers/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
