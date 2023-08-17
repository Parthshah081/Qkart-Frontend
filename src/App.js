import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import { ThemeProvider } from "@emotion/react";
import theme from './theme.js'
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import React from 'react'
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks"
export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (

    <React.StrictMode>
    <ThemeProvider theme={theme}>
     <Switch>
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
       <Route path='/login' component={Login}/>
       <Route path='/register' component={Register}/>
       <Route exact path='/' component={Products}/>
       <Route path='/checkout' component={Checkout} />
       <Route path='/thanks' component={Thanks}/>
    </Switch>
    </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
