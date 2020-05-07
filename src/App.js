import React from 'react';
import store from "./redux/store";
import { Provider } from "react-redux";
import ItemList from "./components/ItemList";
import AppBar from "./components/AppBar";
import DetailItem from "./components/DetailItem";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
        <AppBar/>
        <BrowserRouter>
            <Switch>
                <Route path="/items" component={ItemList} />
                <Route path="/details/:id" component={DetailItem} />
                <Redirect from="/" to="/items" />
            </Switch>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
