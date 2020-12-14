import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import NotFound from "./containers/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context";
import { SWRConfig } from "swr";
import axios from "axios";

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (...args) => axios.get(...args).then((res) => res.data),
      }}
    >
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
    </SWRConfig>
  );
}

export default App;
