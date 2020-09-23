import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./App.css"
import Admin from "./pages/admin";
import Marketeer from "./pages/marketeer";
import Home from "./pages/Home";


export default function App() {
    return (
        <Router>
            <div className="container">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                            <li>
                                <Link to="/marketeer">Marketeer</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/marketeer">
                        <Marketeer />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
