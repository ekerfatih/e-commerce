import './App.css'
import Layout from "./components/Homepage/layout/layout.jsx";
import {Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage/HomePage.jsx";
import ShopPage from "./components/Singlepages/ShopPage/ShopPage.jsx";
import ProductDetails from "./components/Singlepages/ProductDetailsPage/ProductDetails.jsx";
import Contact from "./components/Singlepages/Contact/Contact.jsx";
import Team from "./components/Singlepages/Team/Team.jsx";
import About from "./components/Singlepages/About/About.jsx";
import Register from "./components/Singlepages/SignUp/Register.jsx";
import LoginForm from "./components/Singlepages/Login/Login.jsx";
import ScrollToTop from "./components/Singlepages/Helper/ScrollToTop.jsx";
import ShoppingCart from "./components/Singlepages/ShoppingCart/ShoppingCart.jsx";

function App() {
    return (
        <Layout>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage}/>
                <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetails}/>
                <Route exact path="/shop" component={ShopPage}/>
                <Route path="/cart" component={ShoppingCart}/>
                <Route path="/team" component={Team}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
                <Route path="/signup" component={Register}/>
                <Route path="/login" component={LoginForm}/>
            </Switch>
        </Layout>
    );
}

export default App;
