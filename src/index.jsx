import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home1 from "./pages/Home1"
import Location1 from "./pages/Location1"
import About1 from "./pages/About1"
import Header1 from "./components/Header1"
import Footer1 from './components/Footer1'
import Error1 from "./components/Error1"
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header1 />
            <Switch>
                <Route exact path="/">
                    <Home1 />
                </Route>
                <Route path="/location/:locationId" component={Location1} />
                <Route path="/about">
                    <About1 />
                </Route>
                <Route>
                    <Error1 />
                </Route>
            </Switch>
            <Footer1 />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
