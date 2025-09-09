import './App.css'
import Layout from "./components/Homepage/layout/layout.jsx";
import {Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage/HomePage.jsx";
import ShopPage from "./components/Singlepages/ShopPage/ShopPage.jsx";
import ProductDetails from "./components/Singlepages/ProductDetailsPage/ProductDetails.jsx";


function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/shop" component={ShopPage}/>
                <Route path="/product/:id" component={ProductDetails}/>
                {/*<Route path="/about" component={AboutPage}/>*/}
                {/*<Route path="/contact" component={ContactPage}/>*/}
                {/*<Route component={NotFoundPage}/>*/}
            </Switch>
        </Layout>
    );
}

export default App;
