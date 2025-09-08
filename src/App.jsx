import './App.css'
import Layout from "./layout/layout.jsx";
import {Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";


function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                {/*<Route path="/product" component={ProductPage}/>*/}
                {/*<Route path="/about" component={AboutPage}/>*/}
                {/*<Route path="/contact" component={ContactPage}/>*/}
                {/*<Route component={NotFoundPage}/>*/}
            </Switch>
        </Layout>
    );
}

export default App;
